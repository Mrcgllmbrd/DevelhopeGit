Dataset: Titanic dataset
Schema: tested (PassengerId, Survived, Pclass, Name, Sex, Age, Parch, Ticket, Fare, Cabin, Embarked)
Link: https://www.kaggle.com/datasets/brendan45774/test-file?resource=download
List of tasks:

1) Display female passengers who survived and are older than 30.
2) Find the average age of men who didn't survive.
3) Display information for passengers who spent between $20 and $50 on their tickets and got on the ship at port 'C'."
4) Find the total number of the survivors in the first class.
5) Show the information of passengers who boarded from Cherbourg (port 'C') and spent more than $75 on their tickets.

-------------------------------------------

1) 
SELECT name
FROM tested
WHERE age>30 AND survived=1 AND sex="female"

2)
SELECT AVG(age) as average_age
FROM tested
WHERE survived=0 AND sex="male"

3)
SELECT *
FROM tested
WHERE embarked="C" AND fare BETWEEN 20 AND 50

4)
SELECT *
FROM tested
WHERE pclass=1 AND survived=1

5)
SELECT *
FROM tested
WHERE embarked="C" AND fare>75
