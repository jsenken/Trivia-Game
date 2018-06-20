function setup() {
    index = 0;
    $('.answers').hide();
    $('.question').append('<button id="startButton">Start</button>');
    $('#startButton').on('click', function() {
        $('#startButton').hide();
        $('.answers').show();
        countdownTimer.start();
         loadQuestion(index);
    });
}
var noAnswer = 0;
var countdownTimer = {
	time : 15,
	reset: function() {
		this.time = 15;
		$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
	start: function() {
		counter = setInterval(countdownTimer.count, 1000);	
	},
	stop: function() {
		clearInterval(counter);
	},
	count: function() {
		countdownTimer.time--;
		if (countdownTimer.time >= 0) {
			$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
		}
		else {
			index++;
            noAnswer++;
			countdownTimer.reset();
			if (index < questionArray.length) {
				loadQuestion(index);
			} else {
				$(".answerchoice").hide();
				showScore();
			}
		}
	}
};
    var index = 0;
    var q1 = {
	    question : 'What kind of bear is best?',
	    possibleAnswers : ['A. Black Bear',
				        'B. Grizzlie Bear',
				        'C. Polar Bear',
				        'D. Well there are basically two schools of thought...'],
	    flags : [true, false, false, false],
	    answer : 'A. Black Bear'
    };
    var q2 = {
        question : 'What does Kevin describe as "beatiful" but he wouldnt want to bang it?',
        possibleAnswers : ['A. His television',
                        'B. A bowl of chili',
                        'C. A painting',
                        'D. A PBJ Sandwich'],
        flags : [false, false, true, false],
        answer : 'C. Painting'
    };
    var q3 = {
        question : 'What does Creed say is pictured in the image of marajuana Dwight is holding up?',
        possibleAnswers : ['A. Sweet Mary Jane',
                        'B. Bobo Bush',
                        'C. Whacky Tobaccy',
                        'D. Northern Lights, Cannabis indica'],
        flags : [false, false, false, true],
        answer : 'D. Northern Lights, Cannabis indica'
    };
    var q4 = {
        question : 'Where does Michael say the birds flew for the winter?',
        possibleAnswers : ['A. North',
                            'B. South',
                            'C. East',
                            'D. West'],
        flags : [false, false, false, true],
        answer : 'D. West'
    };
    var q5 = {
        question : 'What alone does Dwight say moves the wheels of history?',
        possibleAnswers : ['A. Fear',
                        'B. Sales',
                        'C. Blood',
                        'D. Power'],
        flags : [false, false, true, false],
        answer : 'C. Blood'
    };
    var q6 = {
        question : 'If Michael had a gun with two bullets and was locked in a room with the following people, who would he shoot?',
        possibleAnswers : ['A. Hitler',
                        'B. Bin Laden',
                        'C. Toby',
                        'D. Toby Twice'],
        flags : [false, false, false, true],
        answer : 'D. Toby Twice'
    };
    var q7 = {
        question : 'According to Josh, what map can you not snipe on?',
        possibleAnswers : ['A. Covington',
                        'B. Carentan',
                        'C. Carrolton',
                        'D. Kerringtown'],
        flags : [false, true, false, false],
        answer : 'B. Carentan'
    };
    var q8 = {
        question : 'According to Gabe, what is the most important appliance in the house?',
        possibleAnswers : ['A. Printer',
                       'B. Computer',
                       'C. Toilet',
                       'D. Telephone'],
        flags : [false, false, true, false],
        answer : 'C. Toilet'
    };
    var q9 = {
            question : 'Who does Kevin say exposes herself multiple times in Les Jolies Chosen?',
            possibleAnswers : ['A. Merryl Streep',
                           'B. Marion Cotillard',
                           'C. Marie Castel',
                           'D. Melanie Carmet'],
            flags : [false, true, false, false],
            answer : 'B. Marion Cotillard'
    };
    var q10 = {
        question : 'What song does Michael think is "Staying Alive" by the Bee Gees?',
        possibleAnswers : ['A. Its Raining Men',
                       'B. Respect',
                       'C. I Will Survive',
                       'D. Celebrate Good Times'],
            flags : [false, false, true, false],
            answer : 'C. I Will Survive'
            };
    var questionArray = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];
    function loadQuestion(questionSelection) {
        countdownTimer.reset();
        $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
        $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
        $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
        $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
        $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
    }	


    var right = 0;
    var wrong = 0;
   
    function answerRight() {
        right++;
        
    }

    function answerWrong() {
        wrong++;
    }

    function showScore() {
	    $('.question').empty();
	    $('.question').append("<h2><p>" + right + " right</p></h2>");
        $('.question').append("<h2><p>" + wrong + " wrong</p></h2>");
        $('.question').append("<h2><p>" + noAnswer + " did not answer </p><h2>");
	    countdownTimer.stop();
        $('.timer').empty();
        $('.question').append('<button id="startButton">Start</button>');
        index = 0;
        right = 0;
        wrong = 0;
        noAnswer = 0;
        $('#startButton').on('click', function() {
            $('#startButton').hide();
            $('.answers').show();
            countdownTimer.start();
             loadQuestion(index);
        });

    };
    // function updateScore(){
    //     $('.question').append("<h2><p>" + right + " right</p></h2>");
    //     $('.question').append("<h2><p>" + wrong + " wrong</p></h2>");
    //     $('.question').append("<h2><p>" + noAnswer + " did not answer </p><h2>");

    // };

    setup();
    $('.answerchoice').on('click', function() {
        if(this.id == 'buttonA') {
 	    var answerChosen = 'A';
        } else if(this.id == 'buttonB') {
 	    answerChosen = 'B';
        } else if (this.id == 'buttonC') {
 	    answerChosen = 'C';
        } else if (this.id == 'buttonD') {
 	    answerChosen = 'D';
        } 
        if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	    answerRight();
        } else if (answerChosen == 'A') {
 	    answerWrong();
        }
        if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	    answerRight();
        } else if (answerChosen == 'B') {
 	    answerWrong();
        }
        if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	    answerRight();
        } else if (answerChosen == 'C') {
 	    answerWrong();
        }
        if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	    answerRight();
        } else if (answerChosen == 'D') {
 	    answerWrong();
        }
        

        $(".question").text('');
        $("#buttonA").text('');
        $("#buttonB").text('');
        $("#buttonC").text('');
        $("#buttonD").text('');
        index++;
        if (index < questionArray.length) {
 	    loadQuestion(index);
        } else {
 	    $(".answerchoice").hide();
 	    showScore();
        }
    });


