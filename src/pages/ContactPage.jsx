import Header from "../components/Header/Header";

const   ContactPage = () => {
  return(

        <div className="page-container" style={{ overflow: "auto" }}> 
          
            <h1>Contact Us</h1>
            <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life,
               our team is here to help.</p>
         <h3>General Enquirees</h3>
            <b>Vivekanand College Main Campus</b>
            <p>[Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]<br/> India</p>
            <p>Phone:<b>+91 12345 67890</b><br/>Email:<b>info@vivekanandcollege.edu</b><br/>
              Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>
               
            <h3>Admissions Office</h3>
            <p>For all admission-related queries regarding undergraduate or postgraduate programs:<br/> Phone: +91 98765 43210<br/>
            Email: admissions@vivekanandcollege.edu</p>
              
            <h3>Student Support Services</h3>
            <p>For current student support, academic advising, or general assistance:<br/>Phone: +91 87654 32109<br/>
             Email: studentsupport@vivekanandcollege.edu</p>
            
             <h3>Find US On the Map</h3>
             <a href="https://www.google.com/maps/search/Vivekanand+College">View on Google Maps</a>
             <h3>Send Us a Message</h3>
             <p>[A contact form with fields for Name, Email, Subject, Message can be added here.]</p>
             
 </div>
    )
}
 export default ContactPage;