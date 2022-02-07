var timeline = [];

var experiment_id = jsPsych.randomization.randomID(8);

var consent = {
    type: "external-html",
    url: "./views/consent.html",
    // url: "https://raw.githubusercontent.com/Sepsad/Orthogonalized-goNoGo-Task/main/public/views/consent_for_pilot.html",
    cont_btn: "consent",
    data: {},
    on_load: function () {
    //   document.getElementById("jspsych-progressbar-container").style.visibility =
        // "visible";
    },
  };


timeline.push(consent);
var first_welcome_page ={
	type: 'html-button-response',
	stimulus: "<img src='../img/welcome.gif' style='height: 200px; '></img> "+
	"<h1>Welcome to our questionnaire</h1> <p>You will earn <u>$2</u> for completing.</p> <p> This questionnaire will take approximately 10 minutes to complete <br>Click on START when you are ready!</p>",
	choices: ['START'],
	data: {},
	on_load: function() {
		// document.getElementById("jspsych-progressbar-container").style.visibility = "hidden";
	},
	on_finish: function() {
		jsPsych.data.addDataToLastTrial({
		exp_stage:"first_welcome",
		})
	}
}

timeline.push(first_welcome_page);


var instructions = {
	type: 'instructions',
	pages: [
        "<p>The following questions are concerned with the past four weeks (28 days) only. <br>Please read each question carefully and answer all the questions. <br>Thank you.</p>"
	],
	show_clickable_nav: true,

	data: {},
	on_finish: function(data) {

		jsPsych.data.addDataToLastTrial({
			exp_stage:"instructions",
			exp_part: "instructions"
		})
	}
}

timeline.push(instructions);

first_part_questions  = [
    {id: '1', row_name: "1. Have you been deliberately <b>trying</b> to limit the amount of food you eat to influence your shape or weight?"},
    {id: '2', row_name: "2. Have you gone for long periods of time (8 waking hours or more) without eating anything at all in order to influence your shape or weight?"},
    {id: '3', row_name: "3. Have you <b>tried</b> to exclude from your diet any foods that you like in order to influence your shape or weight?"},
    {id: '4', row_name: "4. Have you <b>tried</b> to follow definite rules regarding your eating (for example, a calorie limit) in order to influence your shape or weight?"},
    {id: '5', row_name: "5. Have you had a definite desire to have an <b>empty</b> stomach with the aim of influencing your shape or weight? "},
    {id: '6', row_name: "6. Have you had a definite desire to have a <b>totally flat</b> stomach?"},
    {id: '7', row_name: "7. Has thinking about <b>food, eating or calories</b> made it very difficult to concentrate on things you are interested in (for example, working, following a conversation, or reading)?"},
    {id: '8', row_name: "8. Has thinking about <b>shape or weight</b> made it very difficult to concentrate on things you are interested in (for example, working, following a conversation, or reading)?"},
    {id: '9', row_name: "9. Have you had a definite fear of losing control over eating?"},
    {id: '10', row_name: "10. Have you had a definite fear that you might gain weight?"},
    {id: '11', row_name: "11. Have you felt fat?"},
    {id: '12', row_name: "12. Have you had a strong desire to lose weight?"}
]

var col_spectrum = [
    'ON HOW MANY OVER THE PAST 28 DAYS ...',
    'NO DAYS',
    '1-5 DAYS',
    '6-12 DAYS',
    '13-15 DAYS',
    '16-22 DAYS',
    '23-27 DAYS',
    'EVERY DAY'
]

var first_part = {
    type: 'table-completion',
    id: 'first',
    select_one: true,
    submit: 'Continue',
    highlighting: 'row',
    row_values: first_part_questions,
    column_headers: col_spectrum,
    response_validation: 'force_column',
    column_vals: [ -1,0, 1, 2, 3, 4, 5, 6],
    preamble: "Questions 1 to 12: Please select the appropriate checkbox. Remember that the questions only refer to the past four weeks (28 days) only"
}

timeline.push(first_part);


var second_part_questions = [ 
    {type: 'slider',
    prompt: "13. Over the past 28 days, how many times have you eaten what other people would regards as an unusually large amount of food (given the circumstances)?",
    id: '13',
    labels: [],
    group: 0},
    {type: 'slider',
    prompt: "14. … On how many of these times did you have a sense of having lost control over your eating (at the time you were eating)?",
    labels: [],
    id: '14',
    group: 0},
    {type: 'slider',
    prompt: "15. Over the past 28 days, on how many DAYS have such episodes of overeating occurred (i.e. you have eaten an unusually large amount of food and have had a sense of loss of control at the time)?",
    labels: [],
    id: '15',
    group: 1},
    {type: 'slider',
    prompt: "16. Over the past 28 days, how many times have you made yourself sick (vomit) as a means of controlling your shape or weight?",
    labels: [],
    id: '16',
    group: 2},
    {type: 'slider',
    prompt: "17. Over the past 28 days, how many times have you taken laxatives as a means of controlling your shape or weight?",
    labels: [],
    id: '17',
    group: 3},
    {type: 'slider',
    prompt: "18. Over the past 28 days, how many times have you exercised in a “driven” or “compulsive” way as a means of controlling your weight, shape or amount of fat, or to burn off calories?",
    labels: [],
    id: '18',
    group: 4}
]



var second_part = {
    type: 'custom-form',
    id: 'second',
    highlight: 'group',
    preamble: 'Questions 13-18: Please fill in the appropriate number in the boxes. Remember that the questions only refer to th past four weeks (28 days).',
    questions: second_part_questions

}

// timeline.push(second_part);



var third_1_part = {
    
    type: 'table-completion',
    id: 'third_1',
    select_one: true,
    submit: 'Continue',
    highlighting: 'row',
    row_values: [{id: '19', row_name: "19. Over the past 28 days, on how many days have you eaten in secret (ie, furtively)? … Do not count episodes of binge eating."}],
    column_headers: col_spectrum,
    response_validation: 'force_column',
    column_vals: [ -1,0, 1, 2, 3, 4, 5, 6],
    preamble: "Questions 19 to 21: Please select the appropriate checkbox. Please note that for these questions the term “binge eating” means eating what others would regard as an unusually large amount of food for the circumstances, accompanied by a sense of having lost control over eating."

}

// timeline.push(third_1_part);

var third_2_part = {

    type: 'table-completion',
    id: 'third_2',
    select_one: true,
    submit: 'Continue',
    highlighting: 'row',
    row_values: [{id: '20', row_name: "20. On what proportion of the times that you have eaten have you felt guilty (felt that you’ve done wrong) because of its effect on your shape or weight? … Do not count episodes of binge eating."}],
    column_headers: [' ','None of the times', 'A few of the times', 'Less than half', 'Half of the times', 'More than half', 'Most of the time', 'Every time'],
    response_validation: 'force_column',
    column_vals: [ -1,0, 1, 2, 3, 4, 5, 6],
    preamble: "Questions 19 to 21: Please select the appropriate checkbox. Please note that for these questions the term “binge eating” means eating what others would regard as an unusually large amount of food for the circumstances, accompanied by a sense of having lost control over eating."

}

// timeline.push(third_2_part);

var third_3_part = {

    type: 'table-completion',
    id: 'third_3',
    select_one: true,
    submit: 'Continue',
    highlighting: 'row',
    row_values: [{id: '21', row_name: "21. Over the past 28 days, how concerned have you been about other people seeing you eat? … Do not count episodes of binge eating."}],
    column_headers: [' ','Not at all', 'slightly','', 'moderately','',  'markedly',''],
    response_validation: 'force_column',
    column_vals: [ -1,0, 1, 2, 3, 4, 5, 6],
    preamble: "Questions 19 to 21: Please select the appropriate checkbox. Please note that for these questions the term “binge eating” means eating what others would regard as an unusually large amount of food for the circumstances, accompanied by a sense of having lost control over eating."

}

// timeline.push(third_3_part);


forth_part_questions  = [
    {id: '22', row_name: "22. Has your weight influenced how you think about (judge) yourself as a person?"},
    {id: '23', row_name: "23. Has your shape influenced how you think about (judge) yourself as a person?"},
    {id: '24', row_name: "24. How much would it have upset you if you had been asked to weigh yourself once a week (no more, or less, often) for the next four weeks?"},
    {id: '25', row_name: "25. How dissatisfied have you been with your weight?"},
    {id: '26', row_name: "26. How dissatisfied have you been with your shape? "},
    {id: '27', row_name: "27. How uncomfortable have you felt seeing your body (for example, seeing your shape in the mirror, in a shop window reflection, while undressing or taking a bath or shower)?"},
    {id: '28', row_name: "28. How uncomfortable have you felt about others seeing your shape or figure (for example, in communal changing rooms, when swimming, or wearing tight clothes)?"},

]

var forth_part = {
    type: 'table-completion',
    id: 'forth',
    select_one: true,
    submit: 'Continue',
    highlighting: 'row',
    row_values: forth_part_questions,
    column_headers: ['ON HOW MANY OVER THE PAST 28 DAYS ...','Not at all', 'slightly','', 'moderately','',  'markedly',''],
    response_validation: 'force_column',
    column_vals: [ -1,0, 1, 2, 3, 4, 5, 6],
    preamble: "Questions 22 to 28: Please select the appropriate checkbox. Remember that the questions only refer to the past four weeks (28 days).",

}

// timeline.push(forth_part);

desirability_to_control_questions_1 = [
    {id: '29', row_name: "29. I prefer a job where I have alot of control over what I do and when I do it."},
    {id: '30', row_name: "30. I enjoy political participation because I want to have as much of a say in running government as possible."},
    {id: '31', row_name: "31. I try to avoid situations where someone else tells me what to do."},
    {id: '32', row_name: "32. I would prefer to be a leader rather than a follower."},
    {id: '33', row_name: "33. I enjoy being able to influence the actions of others."},
    {id: '34', row_name: "34. I am careful to check everything on an automobile before I leave for a long trip."},
    {id: '35', row_name: "35. Others usually know what is best for me."},
    {id: '36', row_name: "36. I enjoy making my own decisions."},
    {id: '37', row_name: "37. I enjoy having control over my own destiny."},
    {id: '38', row_name: "38. I would rather someone else took over the leadership role when I'm involved in a group project."},
]


var desirability_to_control_part_1 = {
    type: 'table-completion',
    id: 'desirability_to_control_1',
    select_one: true,
    submit: 'Continue',
    highlighting: 'row',
    row_values: desirability_to_control_questions_1,
    column_headers: ['Check the box that best reflects your belief','Never true', 'Rarely true','Sometimes but infrequently true', 'Neutral','Sometimes true',  'Usually true','Always true'],
    response_validation: 'force_column',
    column_vals: [ -1,1, 2, 3, 4, 5, 6, 7],
    preamble: "Questions 29 to 38: Below you will find a series of statements. Please read each statement carefully and respond to it by expressing the extent to which you believe the statement applies to you.",

}

timeline.push(desirability_to_control_part_1)

desirability_to_control_questions_2 = [
    {id: '39', row_name: "39. I consider myself to be generally more capable of handling situations than others are."},
    {id: '40', row_name: "40. I'd rather run my own business and make my own mistakes than listen to someone else's orders."},
    {id: '41', row_name: "41. I like to get a good idea of What a job is all about before I begin."},
    {id: '42', row_name: "42. When I see a problem I prefer to do something about it rather than sit by and let it continue."},
    {id: '43', row_name: "43. When it comes to orders, I would rather give them than receive them."},
    {id: '44', row_name: "44. I wish I could push many of life's daily decisions off on someone else."},
    {id: '45', row_name: "45. When driving, I try to avoid putting myself in a situation where I could be hurt by someone else's mistake."},
    {id: '46', row_name: "46. I prefer to avoid situations where someone else has to telt me what it is I should be doing."},
    {id: '47', row_name: "47. There are many situations in which I would prefer only one choice rather than having to make a decision."},
    {id: '48', row_name: "48. I like to wait and see if someone else is going to solve a problem so that I don't have to be bothered by it."}
] 

var desirability_to_control_part_2 = {
    type: 'table-completion',
    id: 'desirability_to_control_2',
    select_one: true,
    submit: 'Continue',
    highlighting: 'row',
    row_values: desirability_to_control_questions_2,
    column_headers: ['Check the box that best reflects your belief','Never true', 'Rarely true','Sometimes but infrequently true', 'Neutral','Sometimes true',  'Usually true','Always true'],
    response_validation: 'force_column',
    column_vals: [ -1, 1, 2, 3, 4, 5, 6, 7],
    preamble: "Questions 39 to 48: Below you will find a series of statements. Please read each statement carefully and respond to it by expressing the extent to which you believe the statement applies to you.",

}

timeline.push(desirability_to_control_part_2)





var fifth_part_questions = [ 
    {type: 'slider',
    prompt: "What is your weight at present? (Please give your best estimate.)",
    id: 'weight',
    labels: [],
    group: 0},
    {type: 'slider',
    prompt: "What is your height? (Please give your best estimate.)",
    id: 'heightfeet',
    labels: [],
    group: 1},
    {type: 'slider',
    prompt: "",
    id: 'heightinch',
    labels: [],
    group: 1},
]

var fifth_part = {
    type: 'custom-form',
    id: 'fifth',
    highlight: 'group',
    submit: 'Continue',
    questions: fifth_part_questions,
    on_finish: function(data){
    }
}

timeline.push(fifth_part);






var sixth_part= {
    type: 'custom-form',
    id: 'sixth',
    highlight: 'group',
    submit: 'Finish',
    questions: [
        {type: 'multiple',
        prompt: "Have you ever had a pet?",
        id: 'pet',
        options: ['no', 'yes'],
        values: ['no', 'yes'],
        has_followup: [{id: 'pet-type', criterion: 'yes'}, {id: 'pet-timeperiod', criterion: 'yes'}, {id: 'pet-number', criterion: 'yes'}],
        group: 0},
        {type: 'text',
        placeholder: 'Cat, Dog, ...',
        prompt: "What pet have you had?",
        id: 'pet-type',
        is_followup: true,
        group: 1},
        {type: 'text',
        prompt: "How many have you had?",
        placeholder: '1',
        id: 'pet-number',
        is_followup: true,
        group: 2},
        {type: 'text',
        placeholder: 'years',
        prompt: "How long (years) have you had it/they?",
        id: 'pet-timeperiod',
        is_followup: true,
        group: 3}
  
    ],
    on_finish: function(data){
        completion_code = jsPsych.data.get().last(1).values()[0].experiment_id;

        var goodbye_message = "<h1><strong> Thank you very much for participating!</strong></h1>" + 
        // "<p>You have now completed the first round of the study.</p>" +
        "<p>You have now completed the study.</p>" +
        "<h3><strong>Your completion code is: <font color='red'>"+ completion_code +"</font></strong></h3>" +
        "<p>Please copy and paste this into the MTurk window to claim payment and the bonus.</p>" +
        "<p>If you have any questions about this study, please mail Sepehr at <a href='Sepehrsdp@gmail.com' target = '_top'>sepehrsdp@gmail.com</a></p>"
        jsPsych.endExperiment(goodbye_message);
    }

}

timeline.push(sixth_part);


jsPsych.data.addProperties({
    experiment_id: "GNG_" + experiment_id,
  });

var turkInfo = jsPsych.turk.turkInfo();
jsPsych.data.addProperties({
  assignmentID: turkInfo.assignmentId,
});
jsPsych.data.addProperties({
  mturkID: turkInfo.workerId,
});
jsPsych.data.addProperties({
  hitID: turkInfo.hitId,
});





jsPsych.init({
    // uncomment if you need to preload anything that isn't a stim in an existing jspsych plugin
    preload_images: [],
    default_iti: 500,
    show_progress_bar: true,
    experiment_width: 1000,
    timeline: timeline,
    on_finish: function(){
        jsPsych.data.displayData();
        jsPsych.data.get().localSave('csv', 'data.csv');

    }
});
