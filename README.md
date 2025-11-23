# Password Strength Analyzer
The Password Strength Analyzer is a simple and interactive web-based application designed to help users evaluate the security level of their passwords. The project analyzes the entered password in real time and provides instant feedback on its strength along with useful suggestions to improve it. Additionally, the system includes an automatic Strong Password Generator that creates a secure password for users.

<img width="959" height="534" alt="Screenshot 2025-11-22 120433" src="https://github.com/user-attachments/assets/c774394f-e84a-4b76-972d-1c0b7525d8d7" />

# Key Features
1.	Real-Time Password Strength Checking
When the user types a password, the system immediately evaluates it based on:
o	Password length
o	Use of lowercase letters
o	Use of uppercase letters
o	Use of digits
o	Use of special characters
o	Avoiding commonly-used passwords
2.	Improvement Suggestions
If the password does not meet certain criteria, the system displays suggestions such as:
o	“Use at least 12 characters.”
o	“Include uppercase letters.”
o	“Include numbers.”
o	“Include special characters.”
o	“Do not use common passwords.”
3.	Strong Password Generator
A dedicated button allows the user to automatically generate a secure password.
The generated password:
o	Is 14 characters long
o	Uses a mix of letters, numbers, and special characters
o	Is displayed in a read-only text box
o	Automatically updates the strength analyzer output
4.	Clean and User-Friendly Interface
The interface is built using HTML and styled with CSS to offer:
o	Centered layout
o	Modern input fields
o	Color-coded strength indicators
o	Simple and responsive design
Technology Stack
•	HTML – Structure of the webpage
•	CSS – Styling and layout
•	JavaScript – Logic for password checking, scoring, suggestions, and password generation
# The result is displayed as:

o	Weak Password <img width="946" height="527" alt="Screenshot 2025-11-22 120532" src="https://github.com/user-attachments/assets/f21f4c07-adc6-4958-b146-6ce200329d89" />

o	Medium Password <img width="949" height="532" alt="Screenshot 2025-11-22 120738" src="https://github.com/user-attachments/assets/674bd184-4d8b-4608-86cb-89f2e27c8949" />

o	Strong Password <img width="949" height="536" alt="Screenshot 2025-11-22 120616" src="https://github.com/user-attachments/assets/7b7f172a-2fa9-4ad4-b0cc-bdd81b3d513d" />

# How It Works
1.	The user enters a password into the input field.
2.	JavaScript evaluates the password using:
o	Regular expressions
o	Score-based logic
3.	The score determines strength:
o	0–2 → Weak
o	3–4 → Medium
o	5 → Strong
4.	Suggestions are listed based on missing criteria.
5.	Pressing Generate Password creates a strong password automatically.
# Purpose of the Project
The main goal of this project is to raise user awareness about cybersecurity and strong password creation. This tool helps users understand how to build secure passwords that protect them from unauthorized access and cyber threats.
# Conclusion
This project successfully demonstrates the importance of password security by analyzing password strength and guiding users to create strong passwords. It combines web technologies effectively to deliver a practical and interactive cybersecurity tool.
