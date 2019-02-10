$('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
       $('.navbar-toggle:visible').click();

});

$('.ui.fluid.dropdown').dropdown({
allowLabels:true
})

$('.ui.fluid.dropdown').dropdown('set selected',['Role1','Role2']);
