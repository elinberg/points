
#Reward Points Application

GIVEN REQUIREMENTS
A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent over $50 in each transaction
 
(e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).
 
Given a record of every transaction during a three month period, calculate the reward points earned for each customer per month and total.

Make up a data set to best demonstrate the solution (Rest/GraphQL)

MY INTERPETAION OF THE REQUIREMENTS

Use REST or GraphQL
I chose to mock the data using quickmocker (I have $2.99 invested in this endeavor. That should count for something)
If you give a developer minimal requirements, we will play fast and loose with them
Since I really couldn't ask any questions and the recruiter is clueless as to what this even is/
I dreamed up a scenario where Southwest Airlines is partnering with Capital One to offer Airline miles
As the tech world is evermore API centric, You don't have the luxary of controlling how the data is stored or returned to you. 
I probably chose the worst case scenario just grabbing users, transaction dates, and transaction amounts from a REST API. 
If I were truly designing an enterprise solution, the prudent method would be to store the points in a lookup table upon insert into the database. You could alternatively query the transaction tanble and create a derived points column. 
The problem with relational databases in a REST world is that it becomes ugly when you are trying to return all the data a front end needs in a single API call. You end up looping (expensive) and bolting a bunch of queries together. I have no experience with GraphQL, but at the end of the day its an ORM like Laravel. 
Using Eager Loading adresseses this issue ,but in my experience, The clients data is so complex or un-normalized that its very difficult to set up Object Relations to express the data in a meaningful way.lat

I chose to calculate the points on the front end. If the formula for points was more complicated, I would implement a web worker to do the calculations in the background. 

I created a transformer class to transform the API data for the front end. I love components but I don't like putting all the logic into them. It gets unweildy over time and the thing that was supposed to be a simple component becomes illegible. I prefer readable code to fancy code. Maybe its my lack of experience but I haven't found anyting in React that behaves like a service. I think the React team should go have a few cold ones with Sergey and his team over at Google. Maybe I'm wrong but React breaks form and is nothing like MVC or MVVC . 

I chose to use Functions over Classes because projects get out of hand when your allways marshalling data via props. It's pretty stupid that the child has to talk to his parent and the parent has to talk to the sibling when they are sitting in the same freaking room. That's the definition of disfunction.
I wouldn't choose Redux, because I don't need to be spoon fed React Hooks.

I wrote this disortation because many times I spend the time and effort to do these homework assignments without getting a chance to defend myself. Programmers love tearing apart each others code. Doesn't bother me If I'm there for the fight. The truth of the matter is I'm my biggest critic. Sometimes I look at my old code and hate myself for it. That said life is about learning from your mistakes and always striving for a better way



