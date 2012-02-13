TestCase('PhotoTest', {
	'test should be a function': function () {
		assertFunction(Photo);
	}
});

//var somePhoto = new Photo({ src: "test.jpg", title:"testing"});
//somePhoto.changeSrc("magic.jpg"); // which triggers "change:src" and logs an update message to the console.
