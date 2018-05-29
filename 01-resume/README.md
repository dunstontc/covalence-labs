# Lab 01: A Modern & Retro Resume

## Objectives

* You will create a resume using JavaScript (modern), but it will be plain text and not graphical (retro).
  * You will create a folder, and inside that folder an index.html file and a javascript file.
  * Your "resume" will simply be a series of `console.log` statements to print the resume data to the console.
  * When you open index.html in the browser, it will be a blank page. That's okay. Your resume will be in the console. (`command + option + I`)
  * Your resume should display the following information:
    * Your name
    * Your career/field
    * A short description of yourself
    * A list of your interests
    * A list of your past positions that includes company/place name, title, short description of what you did
    * A list of your skills
    * You can make up information if you'd like
    * In your skill list, skills that are "cool" should begin with `Check It:`

## Additional Requirements

* You may use console.log to print the data to the console as you see fit, except as specified in these requirements.
* Your name should print in all capital letters, but you must not type it as all capitalized in your code (i.e. you will need to use JavaScript to capitalize it)
* You must have a function called `displayPosition` that takes parameters for company name, job title, and description. The function should `console.log` those three items in a format similar to the example below. You will call `displayPosition` several times with different data.
* Skills:
  * You must have a function called `displaySkill` that takes parameters for skill name and a boolean value for whether the skill is cool (true/false).
  * Inside the function, you should print `Check It:` in front of the skill name only if the skill is cool.
  * If you are not sure if a skill is cool, or if you do not have any cool skills, raise your hand and I will render assistance.

---

## Example Output

Your resume output should look similar to this:

```
Name: DAVID STAPLETON

Career: Full Stack Engineer / Instructor

Description: I like turtles

My Interests:

* Fall TV (The best)

* Locomotives

* Observing awkward situations

* Film soundtracks

My Previous Experience:

* Math, Chemistry, Physics, Biology, and English tutor at Some School

- Tutored students in those areas.

* Undergraduate Teaching Assistant at University of Georgia - Helped

grade assignments, answer questions, held lab hours, and held office

hours for Java and C++ Computer Science classes.

* Lead Programmer for iBeacon Experiment at Georgia Museum of Art -

Created native iOS virtual tour guide that used iBeacon technology to

triangulate position within the museum and give information about a piece.

My Skills:

* French

* Check It: Trombone

* Java

* C / C++

* Check It: Objective-C / Swift

* Check It: Opera Singing

* Python

* JavaScript

* Check It: TypeScript

P.S. One of those skills is not true
```
