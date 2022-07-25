import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../helpers/fireabase';

export const Students = () => {

  const [students, setstudents] = useState([]);
  const studentsCollectionRef = collection(db, "students");

  useEffect(() => {
    const getStudents = async () => {
      const data = await getDocs(studentsCollectionRef);
      setstudents(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    getStudents()
  }, []);
  
  return (
    <>
      <div className='students-container'>
        <div className='students-list-container'>
          {
            students.map((s) => (
              <div key={s.name} className='user--container'>
                <div className='default_user--container'>
                  {/* Contenedor de la foto del usuario */}
                </div>
                <div className='info_container'>
                  <h3 className='nameUser'>{s.name}</h3>
                  <p className='gradeUser'>{s.grade}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}
