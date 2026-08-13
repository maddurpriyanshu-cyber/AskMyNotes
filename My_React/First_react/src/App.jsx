
// // import StudentCard from "./components/StudentCard";
// // import "./App.css";

// // function App() {
// //   const employees = [
// //     {
// //       id: 101,
// //       name: "Ramesh",
// //       department: "CSE",
// //       salary: "50000",
// //     },
// //     {
// //       id: 102,
// //       name: "Kavya",
// //       department: "ECE",
// //       salary: "55000",
// //     },
// //     {
// //       id: 103,
// //       name: "Jade",
// //       department: "IT",
// //       salary: "60000",
// //     },
// //     {
// //       id: 104,
// //       name: "Ruby",
// //       department: "AIML",
// //       salary: "65000",
// //     },
// //   ];

// //   return (
// //     <div className="app">
// //       <StudentCard employees={employees} />
// //     </div>
// //   );
// // }

// // export default App;



// import StudentCard from "./components/StudentCard";
// import "./App.css";

// function App() {
//   const employees = [
//     {
//       id: 101,
//       name: "Ramesh",
//       department: "CSE",
//       salary: "50000",
//     },
//     {
//       id: 102,
//       name: "Kavya",
//       department: "ECE",
//       salary: "55000",
//     },
//     {
//       id: 103,
//       name: "Jade",
//       department: "IT",
//       salary: "60000",
//     },
//     {
//       id: 104,
//       name: "Ruby",
//       department: "AIML",
//       salary: "65000",
//     },
//   ];

//   return (
//     <div className="app">
//       <StudentCard employees={employees} />
//     </div>
//   );
// }

// export default App;


// import LikeCounter from "./components/LikeCounter";
// import "./App.css";

// function App() {
//   return (
//     <div className="app">
//       <LikeCounter />
//     </div>
//   );
// }

// export default App;



// import { useEffect, useState } from "react";

// function App() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((data) => setPosts(data))
//       .catch((error) => console.error("Error fetching posts:", error));
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Posts Viewer</h1>

//       <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
//         <thead>
//           <tr>
//             <th>Post ID</th>
//             <th>Title</th>
//             <th>Description</th>
//           </tr>
//         </thead>

//         <tbody>
//           {posts.map((post) => (
//             <tr key={post.id}>
//               <td>{post.id}</td>
//               <td>{post.title}</td>
//               <td>{post.body}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;


import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("english");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Language Switcher</h1>

      <button onClick={() => setLanguage("english")}>
        English
      </button>

      <button
        onClick={() => setLanguage("telugu")}
        style={{ marginLeft: "10px" }}
      >
        Telugu
      </button>

      <h2>
        {language === "english"
          ? "Welcome to React"
          : "రియాక్ట్‌కు స్వాగతం"}
      </h2>
    </div>
  );
}

export default App;
