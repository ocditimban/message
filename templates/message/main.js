(function ($) {
    alert('go');
    class SampleClass {

        constructor(element) {
            this.element = this;
        }

        alertElementText() {
            alert(this.element.text());
        }
    }


    jQuery(document).ready(function () {
        alert('yesp');
        // let elements = $('.sample-element');

        // elements.each(function() {
        //     // Here we assign the class instance to a unique key 'sampleClass'
        //     $(this).data('sampleClass', new SampleClass($(this))); 
        // });

        // // Now we can access the class instance when using other selectors
        // $('#sample-element-1').data('sampleClass').alertElementText();
        // $('#sample-element-2').data('sampleClass').alertElementText();
    });

}(jQuery));