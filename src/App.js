import { Routes, Route } from 'react-router-dom';

import Navigation from "./routes/navigation/navigation.component";
import ComingSoon from "./routes/comingsoon/comingsoon.component";
import About from "./routes/about/about.component";
import Blog from "./routes/blog/blog.components";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<ComingSoon />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
      </Route>
    </Routes>
  );
};

export default App;
