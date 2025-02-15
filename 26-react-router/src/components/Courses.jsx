import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import courses from '../data/courses';

const SORT_KEYS = ['title', 'slug', 'id'];

const sortCourses = (courses, key) =>
  !key || !SORT_KEYS.includes(key)
    ? [...courses]
    : [...courses].sort((a, b) => (a[key] > b[key] ? 1 : -1));

const Courses = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const [sortKey, setSortKey] = useState(query.sort);
  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(courses, sortKey)
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate('.');
      setSortKey();
      setSortedCourses([...courses]);
    }
  }, [sortKey, navigate]);

  return (
    <>
      <h1>{sortKey ? `Courses sorted by ${sortKey}` : 'Courses'}</h1>
      {sortedCourses.map(course => {
        return (
          <div key={course.id}>
            <Link className="courseLink" to={course.slug}>
              {course.title}
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Courses;
