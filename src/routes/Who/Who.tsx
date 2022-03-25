import { Box, Button, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import './who.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function Who(){

    const [profile, setProfile] = React.useState({
        name:'',
        url:''
});
    const [list, setList] = React.useState<Array<Object>>([]);

    const [Editing,setEditing] = React.useState([]);
    const [TextEditing,setTextEditing] = React.useState([]);


    function handleAdd(e:any){
        e.preventDefault();

        const NewProfil = {
            id: new Date().getTime(),
            name:'New Profil',
            url:'./img/logo-avatar.png'
        };

        setList(
            [...list].concat(NewProfil)
        )

        console.log(list);
        // random nom+img
        // add list

    }

    const theme = createTheme({
        palette: {
          mode: 'dark',
        },
      });

    return(
        <ThemeProvider theme={theme} >
             <Box
            sx={{
                alignSelf : 'end',
                marginLeft:8                 
            }}
        >
            <img className="logo" src="./img/net.png" alt="Netflix logo" />
            
        </Box>
                <CssBaseline />
        
       
                <Box
                sx={{
                    marginTop: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
                >
                    <h1>Who's watching?</h1>

                    <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row'
                        
                    }}> 
                    
                    <Box
                    sx={{
                        display:'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginBottom: 5,
                        marginRight: 4,
                        marginTop: 2,
                        
                    }}>
                        <img className="logo-avatar" src="./img/logo-avatar.png" alt="Avatar logo" />
                        <span className="name">Bou</span>
                    </Box>

                    <Box
                    sx={{
                        display:'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginBottom: 5,
                        marginRight: 4,
                        marginTop: 2,
                        
                    }}
                    >
                    <img className="logo-avatar" src="./img/logo-avatar2.png" alt="Avatar logo" />
                        <span className="name">Bou</span>
                    </Box>

                    <Box
                    
                    sx={{
                        display:'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginBottom: 5,
                        marginRight: 4,
                        marginTop: 2,
                        
                    }}
                    >
                    <img className="logo-avatar" src="./img/logo-avatar3.png" alt="Avatar logo" />
                        <span className="name">Bou</span>
                    </Box>

                        <Box
                            sx={{
                                display:'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                
                                marginTop: 4,
                                marginLeft: 1,
                                
                            }}
                        >
                            
                        <AddCircleIcon className="icon" onClick={handleAdd} sx={{
                            fontSize: 100,
                            }}
                            />

                            <span className="name">Add profil</span>
                        </Box>
                        
                    
                    </Box>


                
                    <button className="btn">
                        MANAGE PROFILES
                    </button>

                </Box>
        </ThemeProvider>
     
        
    
    )
}

export default Who;