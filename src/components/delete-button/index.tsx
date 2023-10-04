import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
const DeleteButton = () => {
    return (
        <div>
            <IconButton aria-label="delete" size="large">
                <DeleteIcon fontSize="inherit" />
            </IconButton>
        </div>
    )
}
export default DeleteButton