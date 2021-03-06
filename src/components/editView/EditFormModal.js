// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import ReactQuill from 'react-quill';
// import styles from '../../containers/default-view/DefaultView-Modal.css';

// const EditFormModal = ({ show, handleClose }) => {
//   const dispatch = useDispatch();

//   const [heading, setHeading] = useState('');
//   const [description, setDescription] = useState('');

//   const formats = [
//     'header',
//     'bold', 'italic', 'underline', 'strike', 'blockquote',
//     'list', 'bullet', 'indent',
//     'link', 'image'
//   ];

//   const modules = {
//     toolbar: [
//       [{ 'header': [1, 2, false] }],
//       ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//       [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
//       ['link', 'image'],
//       ['clean']
//     ],
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     dispatch(createCharacter(heading, description));
//     setHeading('');
//     setDescription('');
//   };

//   return (
//     <div>
//       <p>Create A New Character:</p>
//       <div className={show ? styles.displayBlock : styles.displayNone} >
//         <section className={styles.modalMain} >
//           <form onSubmit={handleSubmit}>
//             Name:<input type="text" value={heading} placeholder="Write Name or Title" onChange={({ target }) => setHeading(target.value)} required />
//             Description:<ReactQuill value={description} onChange={(value) => setDescription(value)} formats={formats} modules={modules} />
//             <button value="button" onClick={handleClose}>Submit</button>
//           </form>
//         </section>
//       </div>
//     </div>
//   );
// };

// EditFormModal.propTypes = {
//   handleClose: PropTypes.func,
//   show: PropTypes.bool,
// };

// export default EditFormModal;