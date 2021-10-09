

// import React from 'react';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';

// export default function Article({ data, id, o }) {
//     const [open, setOpen] = React.useState(o);
//     const [scroll, setScroll] = React.useState('paper');
//     // const handleClickOpen = (scrollType) => () => {
//     //     setOpen(true);
//     //     setScroll(scrollType);
//     // };

//     const handleClose = () => {
//         setOpen(!o);
//     };

//     const descriptionElementRef = React.useRef(null);
//     React.useEffect(() => {
//         if (open) {
//             const { current: descriptionElement } = descriptionElementRef;
//             if (descriptionElement !== null) {
//                 descriptionElement.focus();
//             }
//         }
//     }, [open]);

//     return (
//         <div>
//             {/* <Button onClick={handleClickOpen('paper')}>scroll=paper</Button> */}
//             <Dialog
//                 open={open}
//                 onClose={handleClose}
//                 scroll={scroll}
//                 aria-labelledby="scroll-dialog-title"
//                 aria-describedby="scroll-dialog-description"
//             >
//                 <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
//                 <DialogContent dividers={scroll === 'paper'}>
//                     <DialogContentText
//                         id="scroll-dialog-description"
//                         ref={descriptionElementRef}
//                         tabIndex={-1}
//                     >

//                         {
//                             data[id].title
//                         }
//                     </DialogContentText>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleClose} color="primary">
//                         Cancel
//                     </Button>

//                 </DialogActions>
//             </Dialog>
//         </div>
//     );
// }
