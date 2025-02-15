import { Link, useNavigate, useParams } from 'react-router-dom';
import courses from '../data/courses';
import { useEffect } from 'react';
// import NotFound from './NotFound';

const SingleCourse = () => {
  const params = useParams();
  const navigate = useNavigate();
  const course = courses.find(course => course.slug === params.courseSlug);

  useEffect(() => {
    if (!course) {
      navigate('..', { relative: 'path' });
    }
  }, [course]);

  // if (!course) {
  //   return <NotFound />;
  // }

  return (
    <>
      <h1>{course?.title}</h1>
      <h3>{course?.slug}</h3>
      <h3>{course?.id}</h3>
      <Link to=".." relative="path">
        All courses
      </Link>
    </>
  );
};

export default SingleCourse;
