import { styled } from "@mui/material";
import { ReactNode } from "react";

interface StyledButtonProps {
    children: ReactNode
    onClick: () => void
}

const StyledButton: React.FC<StyledButtonProps> = ({children, onClick}) => {

    const StyledButton = styled("button")(({theme}) => ({
        backgroundColor: "transparent",
        border:'1px solid',
        borderRadius: "3px",
        padding: "5px 15px",
        width:"100%",
        color: theme.palette.primary.contrastText,
        '&:hover': {
            backgroundColor: theme.palette.secondary.main
        },
        display:"inline-flex",
        alignItems:"center",
        justifyContent:"center",
        gap:"10px"
    }))  

    return (
      <>
        <StyledButton onClick={onClick}>
            {children}
        </StyledButton> 
      </>
    )
  }
  
  export default StyledButton;