function searchBooks() {
    var authors = ["Thomas Mann", "James Joyce", "E. M. Forster", "Isabel Allende", "Isabel Allende"];
    var titles = ["Death in Venice", "A portrait of the artist as a young man", "A room with a view", "The house of spirits", "Of love and shadows"];
    var descriptions = [
        "One of the most famous literary works of the twentieth century, this novella embodies themes that preoccupied Thomas Mann in much of his work: the duality of art and life, the presence of death and disintegration in the midst of existence, the connection between love and suffering and the conflict between the artist and his inner self.",
        "This book is a fictional re-creation of the Irish writer's own life and early environment. The experiences of the novel's young hero, unfold in astonishingly vivid scenes that seem freshly recalled from life and provide a powerful portrait of the coming of age of a young man of unusual intelligence, sensitivity and character.",
        "This work displays an unusually perceptive view of British society in the early 20th century.It is a social comedy set in Florence, Italy, and Surrey, England. Its heroine, Lucy Honeychurch, struggling against straitlaced Victorian attitudes of arrogance, narrow mindedness and sobbery, falls in love - while on holiday in Italy - with the socially unsuitable George Emerson.",
        "Allende describes the life of three generations of a prominent family in Chile and skillfully combines with this all the main historical events of the time, up until Pinochet's dictatorship.",
        "The whole world of Irene Beltran, a young reporter in Chile at the time of the dictatorship, is destroyed when she discovers a series of killings carried out by government soldiers. With the help of a photographer, Francisco Leal, and risking her life, she tries to come up with evidence against the dictatorship."
    ];

    //checks for empty fields
    var titlePresent = document.forms["bookSearchForm"]["bookTitleInput"].value;
    var authorPresent = document.forms["bookSearchForm"]["authorNameInput"].value;

    //clear textarea
    document.getElementById("searchBox").value = "";

    for (var i = 0; i < authors.length; i++) {
        //if both fields filled, strictest conndition
        if (document.getElementById("authorNameInput").value == authors[i] && document.getElementById("bookTitleInput").value == titles[i]) {
            document.getElementById("searchBox").value = document.getElementById("searchBox").value + descriptions[i];
            break;
        //if author provided, title not
        } else if (document.getElementById("authorNameInput").value == authors[i] && titlePresent == "") {
            document.getElementById("searchBox").value = document.getElementById("searchBox").value + titles[i] + " - " + descriptions[i] + "\n" + "\n";
        //if title provided, author not
        } else if (document.getElementById("bookTitleInput").value == titles[i] && authorPresent == "") {
            document.getElementById("searchBox").value = document.getElementById("searchBox").value + authors[i] + " - " + descriptions[i] + "\n" + "\n";
        }
    }
}

document.getElementById("findBook").addEventListener("click", searchBooks, false);

function clearAll() {
    document.getElementById("bookSearchForm").reset();
}

document.getElementById("clearInfo").addEventListener("click", clearAll, false);
