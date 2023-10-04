
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

// export default function FloatingActionButtonSize() {
//   return (
//     <Box sx={{ '& > :not(style)': { m: 1 } }}>
//       <Fab size="small" color="secondary" aria-label="add">
//         <AddIcon />
//       </Fab>
//       <Fab size="medium" color="secondary" aria-label="add">
//         <AddIcon />
//       </Fab>
//       <Fab color="secondary" aria-label="add">
//         <AddIcon />
//       </Fab>
//     </Box>
//   );
// }
const EditButton = () => {
  return (
    <div>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab size="small" color="secondary" aria-label="edit">
          <EditIcon />
        </Fab>
      </Box>
    </div>
    
  );
}

export default EditButton;