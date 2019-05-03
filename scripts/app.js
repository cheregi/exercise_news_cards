/*
    News website
    You are now in charge of the coding of a news related website.
    The data are provided by google news service
    and will be avaible in your code thanks to the file data.js

    You are required today to add each article to a section
    that will be filtered by category.

    Hint :
    1 - Start by creating a variable for the <section> #trending

    2 - Create a loop over all the articles that will
        - Append a <article> tag to the <section>
        - Add a CSS class to the article for the category so that it looks like this : <article class="science">...
        - Append the *title* (<h3>) to the newly created <article> tag
        - Append the *content* (<p>) to the article again
        - Create a "read more" link (<a>) pointing to the *url*

    3 - Create an Event Listener so that when the form with the select is submitted will show only the good caterogy article
    - get the value from the <select> input (the property is called .value)
    - Applied a display none to EACH article (using .style.display)
    - Show EACH article that has that class corresponding to the category

        BONUS : to make this even more interactive a list of category can replace the form submission
    - uncomment this part of the HTML code
    - Create an Event listener that will listen to "click" FOR EACH of the links an launch an function called "filterArticles"
    -The function "filterArticles" will :
        - remove the CSS class "selected" FOR EACH of the links inside this list
        - add the CSS class "selected" to the clicked link using this line
            this.classList.add("selected"); // "this" is the current html element that triggered the event
        - filter the section articles using the algorythm from question 3 (time for a function maybe ?)
*/