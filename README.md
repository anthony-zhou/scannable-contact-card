# Scannable Contact Card

Scannable Contact Card lets you create a QR code for your contact information, which can be shared to iOS, Android, Google Contacts, or whatever else people use for contacts nowadays. 

Here's how it works: first, visit [the Scannable Contact Card website](https://anthony-zhou.github.io/scannable-contact-card). Then, fill out your contact information and press submit. Just like that, you'll get a personal QR Code that anyone can scan to add your contact to their address book!

## TODO:

- [ ] Support optional fields on the contact form
- [ ] Make it look pretty

## Security

Your contact information is never sent to a database or a server; instead, it's stored in the URL of the QR code. Technically, that allows anyone spying on your web traffic to see your information. While I'm not a cybersecurity expert, I think that at least some of our web history gets logged on the internet service provider's servers, where someone malicious could comb through the logs and search for data that looks like an email address or phone number. 

I personally don't see it as a huge problem if someone finds my phone number (I already get so many spam calls anyways), but I wouldn't recommend putting any sensitive info into the contact form.  

Also, the classic disclaimer applies here: I am not responsible for any damage caused by using this program. It's just something I thought would be useful for myself. I'm sharing it in case it helps someone else, too. 

## Technical Details

Scannable Contact Card works by converting your contact information into the [vCard](https://en.wikipedia.org/wiki/VCard) (aka VCF or Virtual Contact File) file format. It then stores the vCard data in a URL parameter, and displays that URL as a QR Code. 

When a user scans the QR code, they're taken to a webpage that automatically downloads the contact file, with a `.vcf` file extension. Most devices, including computers and phones, 

## Browser Compatibility

Some browsers, especially older ones, may fail to parse the format of VCF files. When the QR code is scanned, this could result in an `"unable to download file"` message, or the browser might try to download the file as `contact.vcf.txt`. If you encounter a bug like this, please open an issue with steps to reproduce. 

So far, we've verified that this works on the latest versions of:
- Mobile Safari
- MacOS + Firefox

If you've tested the app on more devices and/or browsers, feel free to open a PR and add to this list. 

## Open-Source Scripts

Thanks to the creators of the following libraries, who made this work possible:

- [QRCode.js](https://github.com/davidshimjs/qrcodejs), a JavaScript library for making QR codes.

License files are in `/docs/vendor`.


## Motivation

Imagine you're at a conference, and you just met a fascinating person named Jared. As you get ready to leave, your conversation might go something like this:

> **YOU**: Jared, I think you're doing great work, and we have a lot in common. We should definitely stay in touch!

> **JARED**: Totally! What's your phone number? *Pulls out phone*

> **YOU**: Eight one seven, four five three—

> **JARED**: Woah there, slow down a bit! I haven't even typed your name into my contacts yet. 

Then, you wait in silence as Jared types in the digits of your phone number, *one by one*, at an impossibly slow speed. You imagine, for a moment, that Jared has been replaced by one of the sloths from Zootopia. After that image ceases to be amusing, you go to the bar and order a glass of water. After waiting a few minutes, you walk back to Jared, who has just finished typing.

> **JARED**: Alright, I got your phone number down. And what was your email?

Now you're really in trouble. The phone number, while tedious, wasn't too long—it was only 10 digits. But your email address? You do a quick count, and find out your email address is *22 characters long.* At this rate, you might as well go back to snail mail!

Of course, you could also share a business card. But who uses those anymore? If you go to conferences often, you'll end up with a hundreds of useless cards, with no way to sort through them (unless you go and scan the cards into a computer). So much work, and think of the trees you're killing!

Or you could get connected on LinkedIn, which is a decent choice. But that's not always the best option. For one, lots of people don't exactly check their LinkedIn messages often. For two, LinkedIn only works for professional settings. What if you just want to call Jared to go shopping together? As friends?

Or you could choose one of the 10-million social media platforms, like Snapchat, Instagram, or WeChat, and ask Jared to add you there. 

But sometimes you just want to share a phone number, without the hassle of business cards, or the awkwardness of transcribing someone's contact information. 

As an added benefit, unlike other QR-scanning platforms like Snapchat or Wechat, Scannable Contact Card allows you to use your native address book to store contacts, so that your network isn't tied to any specific platform. So you get to own your own digital network and won't be left adrift if <insert big company here> suddenly implodes and loses everything. 


## Contributions

Contributions are welcome! Feel free to create an issue if you'd like to see something changed, or—even better—open a PR with the fix. Just make sure you make edits on your own fork, rather than the main repo. Thanks!
