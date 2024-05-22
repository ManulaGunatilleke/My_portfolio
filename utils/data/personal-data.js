import Image from 'next/image';
import profilePic from "../../public/image/profile.jpeg";

export const personalData = {
  name: "Manula Gunatilleke",
  profile: profilePic.src,
  designation: "Software Developer",
  description: "My name is Manula Gunatilleke. I am a professional and enthusiastic programmer in my daily life. I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving. I love almost all the stacks of web application development and love to make the web more open to the world. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I am available for any kind of job opportunity that suits my skills and interests.",
  email: 'manula.gunatilleke22@gmail.com',
  phone: '+94705883826',
  address: 'No: 110, Temple Road, Kalutara North',
  github: 'https://github.com/ManulaGunatilleke',
  facebook: 'https://www.facebook.com/profile.php?id=100065772092832&mibextid=ZbWKwL',
  linkedIn: 'https://www.linkedin.com/in/manula-gunatilleke/',
  twitter: '',
  stackOverflow: '',
  leetcode: "https://leetcode.com/user7037Wi/",
  devUsername: "",
  resume: "https://drive.google.com/file/d/1rgUZvJKog0FCllaKO8BmJLCk0K90EmYh/view?usp=sharing"
};

// Usage in a React Component
export default function Profile() {
  return (
    <div>
      <h1>{personalData.name}</h1>
      <Image src={personalData.profile} alt="Profile Picture" width={200} height={200} />
      <p>{personalData.description}</p>
    </div>
  );
}
