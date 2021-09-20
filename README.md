# verikai-customer-subscription-app
A React Application that takes in and displays Customer Names and Subscription Dates and formats them into ISO dates.

The objectives I focused on were laying out the basic building blocks and visual layout for my app in React while making sure my app was broken down in the necessary components to work in allowing for a clear organization. This included making sure I could display my dummy data and then having a buit out form and make sure that it could take in data based on user input. My plan for the limited time given to work on it was to lay out the visual canvas and starting points that would eventully allow the other more intricate features to be scaled out.

The work I have ahead is to convert the input data from the form to json and store it into local state to display alongside the local data. 

Right now the dummy data is duplicated between 2019, 2020, and 2021. My plan of attack was to create a filter for each section using an id for each year and then searching the string to remove all customer containers that do no match that of the year id. 

I also need write a conditional statement to allow any year other than 2019, 2020, and 2021 to be filtered out as an invalid entry. 

