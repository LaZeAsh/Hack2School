##💡 Inspiration💡
- A lot of people (especially hackathon hackers) love using Discord. As long-time hackers, our team has used Discord for a long-time that it’s become second nature to on it almost constantly for communication and receiving news. However, Discord can distract us from doing school work. We wanted to mitigate this by reversing the effect; if Discord could help us as an educational tool, we get to use our loved app more productively. 
- Discord was an easy place to keep all our stuff in one place

## ⚙️ What it does ⚙️
- We created a Discord bot. Users start from a website where they can download the Discord bot into their own server or their own Direct Message. 
- Let’s say a student has an assignment. They can upload these assignments to Discord by simply taking a picture and uploading it to the bot!
- Our bot then uses Optical Character Recognition (OCR) to scan and identify the text in the assignment and instantly translates it into an easy to read, Discord-friendly embedded text.
- This can be helpful for users to see their assignments in a quick, digitized manner. 
- Furthermore, for example, in the case of asking for review on an assignment, a user can upload their document; reviewers can also view the text for these documents without having to tediously read through the document as an image or having to use a platform other than Discord.
- This is also useful for taking photos of notes, which is then digitized in Discord. Users can then easily share any of these notes with friends on Discord on the same server or other servers.
- Users can ask for reminders for certain tasks after a certain time, which the bot will remind you in your Discord Direct Messages (DMs) so that you can see it while staying on Discord.

## 🏗️ How we built it 🏗️
We mostly used Google Cloud Vision’s OCR and Storage for the backend of our app. For the implementation of the bot, we used TypeScript, the Discord.js API, Node.js. For the website, we used Velo by Wix to give an awesome introduction to our bot and its mission.

## 🟣 Google Cloud AI/ML OCR 🟣
We used the Google Cloud Vision’s OCR to read text from images. We use the Discord URLs of the images and passed it over to Google Cloud. Google Cloud amazingly takes care of all the heavy lifting for us, and identifies the text without having to do much code. 

## 🔴 Google Cloud Storage 🔴
We stored the files themselves in Google Cloud Storage as files in buckets. To record what data was actually inputted into the bot by a user, we had to use a database; so we used Firebase (which is powered by [Google Cloud technology] (https://firebase.google.com/products/firestore?gclid=EAIaIQobChMIkMuXxqX6-QIVGZSzCh0AWAEyEAAYASAAEgKZ2vD_BwE&gclsrc=aw.ds)) . We stored user information, the files related to a user as relational data, and the scanned text of each document. When the text of certain documents are asked to be retrieved, they are fetched from the Google Cloud firebase store instantly. 

## ⚫ Velo by Wix ⚫
We used Velo by Wix to design and create our website. Velo's intuitive and powerful tools significantly expedites the development process by allowing developers to drag and drop UI elements and edit them using Velo's interface. Something that would conventionally take hours to make with HTML/CSS took less than an hour using Velo. In addition, Velo comes with many prebuilt templates and predesigned page elements that are not only functional but provide a clean, minimal aesthetic for our website. 

## ⚫ Domain.com ⚫
We found and registered our domain, studybud.tech, using domain.com. We wanted to come up with an easy-to-remember but also creative domain name, and our Discord bot, which acts as a study buddy, fits the name perfectly. 

## 🚩 Challenges we ran into
It was a huge challenge to set up the credentials for Google Cloud and to get it all working. Google Cloud has a LOT of features so it was quite intimidating and difficult to get used to for most of us. However, we did get it up and working, and we were really impressed with it! With Velo and Domain.com, we were informed that there could be up to a 48 hour waiting period before our website would show up on our domain, which was something that we had to work with. 

## 🥇 Accomplishments that we're proud of
We are most proud of the Google Cloud OCR technology working. We got not only the OCR for images working but were able to play around with sample TIFF or PDF files from local storage and got it to work. We are extremely intrigued with Google Cloud and it’s OCR technology and are proud to have learned a lot about it.

## 📚 What we learned
We learned how amazingly easy it is to use Velo by Wix. It was so easy to make beautiful websites that we couldn’t believe we never used Wix sooner! Furthermore, we learned a lot about how to use Google Cloud. Some of us were also new to the technologies we used, namely TypeScript and Node. 

## ⏳ What's next for StudyBud?
We plan to create a cross-platform mobile app using React Native. We want to maximize how we use Google Cloud by adding Vision OCR functionality for more types of files. 
