import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import courses from '../data/courses';

const SingleCourse = () => {
  const params = useParams();
  const navigate = useNavigate();
  const course = courses.find(course => course.slug === params.courseSlug);

  useEffect(() => {
    if (!course) {
      navigate('..', { relative: 'path' });
    }
  }, [course, navigate]);

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
