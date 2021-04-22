$(document).ready(function () {
    $("button#makePizza").on("click", makePizza);
    $("button#nextContactInfo").on("click", nextContactInfo);
    $("button#nextOrderSummary").on("click", nextOrderSummary);
    $("button#previous1").on("click", backtoPizza);
    $("button#placeOrder").on("click", placeOrder);
    $("button#previous2").on("click", backtoContacts);

    // Hide all the Parts and make them not required
    $("div#step1").hide();
    $("div#step2").hide();
    $("div#step3").hide();
    $("p#submitOrder").hide();

    // Should there be a Start Over Button???

});

function makePizza() {
    // Show Step 1 when button is clicked
    // Hide button when done
    $("div#step1").show()
    $("button#makePizza").hide()
}

function nextContactInfo() {
    // Capture size chosen
    // Calculate size charge
    var sizeCharge = parseFloat($("select#size option:selected").data("price"));
    let size = $("select#size option:selected").val();

    // Capture selection chosen
    let crust = $("select#crust option:selected").val();

    // Count total veg boxes checked
    // Veggie charge
    var numVeg = $("input[name=veggie]:checked").length;
    var vegCharge = parseFloat(numVeg * 1);

    //string of veggies ordered:
    //let checkedBoxes = $(":checkbox:checked")
    let checkedVeggies = $("input[name=veggie]:checked");
    let vegtoppings = "";
    checkedVeggies.each(function() {
        vegtoppings += $(this).data("name" );
    });

    // Count total boxes checked
    // Meat charge
    var numMeat = $("input[name=meat]:checked").length;
    var meatCharge = parseFloat(numMeat * 1.50);

    //list of meats ordered
    let checkedMeats = $("input[name=meat]:checked");
    let meattoppings = "";
    checkedMeats.each(function() {
        meattoppings += $(this).data("name" );
    });

    //Output:
    $("output#sizeFinal").text(size);
    $("output#crustFinal").text(crust);
    $("output#vegFinal").text(vegtoppings);
    $("output#meatFinal").text(meattoppings);

    //Calculations:
    // Subtotal = sizeCharge, veggieCharge, meatCharge
    var subtotal = sizeCharge + vegCharge + meatCharge;
    //Tax (5.1%)
    var tax = subtotal * .051;
    // Delivery Fee ($2.00)
    var deliveryFee = 2;
    // Total Due (2 decimal places)
    var total = subtotal + deliveryFee + tax;

    //Calculate and Output:
    $("output#subtotal").text('$' + parseFloat(subtotal).toFixed(2));
    $("output#tax").text('$' + parseFloat(tax).toFixed(2));
    $("output#deliveryFee").text('$' + parseFloat(deliveryFee).toFixed(2));
    $("output#totalDue").text('$' + parseFloat(total).toFixed(2));


    //Hide current Part
    //Show next Part when clicked
    $("div#step1").hide();
    $("div#step2").show();
}

function nextOrderSummary() {
    //Hide current Part
    //Show next Part when clicked
    $("div#step2").hide();
    $("div#step3").show();
    $("p#submitOrder").hide();

    // Capture contact info
    let firstName = $("input#firstname").val();
    let lastName = $("input#lastname").val();
    let streetAddress = $("input#streetaddress").val();
    let city = $("input#city").val();
    let state = $("input#state").val();
    let zip = $("input#zip").val();
    let phone = $("input#phone").val();

    //Output:
    $("output#customerName").text(firstName + " " + lastName);
    $("output#customerAddress").text(streetAddress + ", " + city + ", " + state + " " + zip);
    $("output#customerPhone").text(phone);
}
function placeOrder() {
    $("p#submitOrder").show();
    $$("button#placeOrder").hide();
}
function backtoPizza() {
    //Hide current Part
    //Show previous Part when clicked
    $("div#step2").hide();
    $("div#step1").show();
}
function backtoContacts() {
    //Hide current Part
    //Show previous Part when clicked
    $("div#step3").hide();
    $("div#step2").show();
}
