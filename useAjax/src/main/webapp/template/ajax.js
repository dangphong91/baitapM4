function save() {
    let idCity = $('#idCity').val();
    let nameCity = $('#nameCity').val();
    let country = {"idCountry": $('#country').val()};
    let area = $('#area').val();
    let population = $('#population').val();
    let gdp = $('#gdp').val();
    let description = $('#description').val();

    let newCity = {
        nameCity: nameCity,
        country: country,
        area: area,
        population: population,
        gdp: gdp,
        description: description
    }
    if (idCity===0){
        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            type: "POST",
            data: JSON.stringify(newCity),
            url: "/city",
            success: successHandler
        });
        //chặn sự kiện mặc định của thẻ
        event.preventDefault();
        document.getElementById("form").style.bottom = "-900px";
    }else{
        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            type: "PUT",
            data: JSON.stringify(newCity),
            url: `/edit/${idCity}`,

            success: successHandler
        });
        //chặn sự kiện mặc định của thẻ
        event.preventDefault();
        document.getElementById("form").style.bottom = "-900px";
    }
}

function successHandler() {
    $.ajax({
        type: "GET",
        //tên API
        url: "/list",
        //xử lý khi thành công
        success: function (data) {
            // hien thi danh sach o day
            let content = `<tr>
                        <th>#</th>
                        <th>Thành phố</th>
                        <th>Quốc gia</th>
                        <th>Action</th>
                        </tr>`;
            for (let i = 0; i < data.length; i++) {
                content += getCity(data[i]);
            }
            document.getElementById('cityList').innerHTML = content;
            //sư kiện nào thực hiện Ajax
            $('.editCity').click(function (event) {
                document.getElementById("form").style.bottom = "50px";
                document.getElementById("text").innerHTML = "Sửa thông tin"
                //lay du lieu
                let a = $(this);
                let idCity = a.attr("href");
                // goi ajax
                $.ajax({
                    type: "GET",
                    //tên API
                    url: `/${idCity}`,
                    //xử lý khi thành công
                    success: function (city) {
                        $('#idCity').val(city.idCity);
                        $('#nameCity').val(city.nameCity);
                        $('#country').val(city.country.idCountry).change();
                        $('#area').val(city.area);
                        $('#population').val(city.population);
                        $('#gdp').val(city.gdp);
                        $('#description').val(city.description);
                    }
                });
                //chặn sự kiện mặc định của thẻ
                event.preventDefault();
            });
            //sư kiện nào thực hiện Ajax
            $('.showCity').click(function (event) {
                document.getElementById("show").style.bottom = "50px";
                //lay du lieu
                let a = $(this);
                let idCity = a.attr("href");
                // goi ajax
                $.ajax({
                    type: "GET",
                    //tên API
                    url: `/${idCity}`,
                    //xử lý khi thành công
                    success: function (city) {
                        $('#nameCity1').html(city.nameCity);
                        $('#country1').html(city.country.idCountry).change();
                        $('#area1').html(city.area);
                        $('#population1').html(city.population);
                        $('#gdp1').html(city.gdp);
                        $('#description1').html(city.description);
                    }
                });
                //chặn sự kiện mặc định của thẻ
                event.preventDefault();
            });
            //sư kiện nào thực hiện Ajax
            $('.deleteCity').click(function (event) {
                //lay du lieu
                let a = $(this);
                let idCity = a.attr("href");
                // goi ajax
                $.ajax({
                    type: "DELETE",
                    //tên API
                    url: `/${idCity}`,
                    //xử lý khi thành công
                    success: function () {
                        a.parent().parent().remove();
                    }
                });
                //chặn sự kiện mặc định của thẻ
                event.preventDefault();
            });
        }
    });
    //chặn sự kiện mặc định của thẻ
    event.preventDefault();
    document.getElementById("form").style.bottom = "-900px";
}

function getCity(city) {
    return `<tr><td>${city.idCity}</td><td><a class="showCity" href="${city.idCity}" style="text-decoration: none"><p>${city.nameCity}</p></a></td><td>${city.country.nameCountry}</td>
            <td>
            <a class="editCity" href="${city.idCity}"  style="text-decoration: none">
                <button class="btn btn-sm btn-outline-secondary badge" type="button">Edit</button></a>
            <a class="deleteCity" href="${city.idCity}"  style="text-decoration: none">
            <button class="btn btn-sm btn-outline-secondary badge" type="button"><i class="fa fa-trash"></i></button></a></td></tr>`;
}

function create(){
    document.getElementById("form").style.bottom = "50px";
    document.getElementById("text").innerHTML = "Thêm thành phố"
    $('#idCity').val(0);
    $('#nameCity').val("");
    $('#country').val("");
    $('#area').val("");
    $('#population').val("");
    $('#gdp').val("");
    $('#description').val("");
}

$(document).ready(function () {
    //sư kiện nào thực hiện Ajax
    $('.editCity').click(function (event) {
        document.getElementById("form").style.bottom = "50px";
        document.getElementById("text").innerHTML = "Sửa thông tin"
        //lay du lieu
        let a = $(this);
        let idCity = a.attr("href");
        // goi ajax
        $.ajax({
            type: "GET",
            //tên API
            url: `/${idCity}`,
            //xử lý khi thành công
            success: function (city) {
                $('#idCity').val(city.idCity);
                $('#nameCity').val(city.nameCity);
                $('#country').val(city.country.idCountry).change();
                $('#area').val(city.area);
                $('#population').val(city.population);
                $('#gdp').val(city.gdp);
                $('#description').val(city.description);
            }
        });
        //chặn sự kiện mặc định của thẻ
        event.preventDefault();
    });
    //sư kiện nào thực hiện Ajax
    $('.showCity').click(function (event) {
        document.getElementById("show").style.bottom = "50px";
        //lay du lieu
        let a = $(this);
        let idCity = a.attr("href");
        // goi ajax
        $.ajax({
            type: "GET",
            //tên API
            url: `/${idCity}`,
            //xử lý khi thành công
            success: function (city) {
                $('#nameCity1').html(city.nameCity);
                $('#country1').html(city.country.nameCountry);
                $('#area1').html(city.area);
                $('#population1').html(city.population);
                $('#gdp1').html(city.gdp);
                $('#description1').html(city.description);
            }
        });
        //chặn sự kiện mặc định của thẻ
        event.preventDefault();
    });
    //sư kiện nào thực hiện Ajax
    $('.deleteCity').click(function (event) {
        //lay du lieu
        let a = $(this);
        let idCity = a.attr("href");
        // goi ajax
        $.ajax({
            type: "DELETE",
            //tên API
            url: `/${idCity}`,
            //xử lý khi thành công
            success: function () {
                a.parent().parent().remove();
            }
        });
        //chặn sự kiện mặc định của thẻ
        event.preventDefault();
    });
})

function exit() {
    document.getElementById("form").style.bottom = "-900px";
    document.getElementById("show").style.bottom = "-900px";
}