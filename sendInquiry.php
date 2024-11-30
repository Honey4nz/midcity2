<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

if($_SERVER["REQUEST_METHOD"] === "POST")
{

$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$phone = $_POST["phone"];
$message = $_POST["message"];



try {
    //Server settings
    $mail->SMTPDebug = 0;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'midcity30sydney@gmail.com';                     //SMTP username
    $mail->Password   = 'ipah wmdy ailw jkag';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('midcity30sydney@gmail.com', 'Inquiry');
    $mail->addAddress('mymechanicnz@gmail.com', 'MidCity');     //Add a recipient
    // $mail->addAddress('ellen@example.com');               //Name is optional
    $mail->addReplyTo($email);
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    // //Attachments
    $mail->addAttachment("./assets/midcity.png");         //Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = empty($subject) ? "Inquiry" : $subject;
    $mail->Body    = "name :- $name <br/> 
                      email :- $email <br/>
                      phone :- $phone <br/>
                      message :- $message <br/>";
    // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();

        // Redirect back to contact page with success message
        header("Location: contact.php?message_sent=true");
        exit();  // Prevent further script execution
    } catch (Exception $e) {
        // Handle the error (log or display error message)
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}