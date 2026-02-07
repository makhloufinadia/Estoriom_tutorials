<<<<<<< HEAD
Setup
Install dependencies: npm install

Launch development mode: npm run dev


How to add a new tutorial?
Step 1: Export and Clean the HTML
Export the source code from Guidde and apply the following cleaning rules to ensure a professional look:

1-Remove the "Introduction" block: Delete the generic intro text and the first image associated with it.

2-Simplify Content: Remove all paragraph <p> tags within the steps. Keep only the <h3> titles and the <img> tags.

3-Remove Branding: Delete the "Powered by Guidde" attribution and any external marketing links.

4-Translate all titles and button descriptions into French.

5-Fix Indexing: Ensure step numbers (1., 2., etc.) are decremented correctly after removing the introduction.

Example of code to REMOVE (Introduction block):

HTML
<h3>1. Introduction</h3>
<div><p>Ce guide vous accompagnera...</p></div>
<img src="..." alt="Introduction" />
Step 2: Add the File
Place the cleaned HTML file into: /public/tutoriels/

Step 3: Register the Data
Add a new object to the estoriomTutorials array in src/data/tutorials.js:

JavaScript
{ 
  id: "31",                      --> Unique ID (next sequential number)
  title: "Nom du Tutoriel",      --> Name shown in the sidebar
  file: "filename.html",         --> Exact filename in /public/tutoriels/
  category: "Ventes"             --> Category (see list below)
},
Organizational Categories
Please use these existing categories to keep the documentation organized:

Produits, Ventes, Contacts, Finances, Achats, Stocks, Rapports, Paramètres.
=======

>>>>>>> 77a0ee1a7c925ff364b8cedcf2aa0d044cddd7e7
