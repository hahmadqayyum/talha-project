import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Slider from './slider'
import Article from './Article';
// import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: "90%",
        height: "100%",
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    titleBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'white',
    },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     featured: true,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function NewsComponent({ data, key }) {

    const [id, setId] = useState(null)


    function handleidChange(newid) {
        setId(newid)

    }
    console.log("index of article", id)

    const classes = useStyles();
    console.log(data)
    return (

        <div className={classes.root} style={{ backgroundColor: "black" }} >
            
{/* 
            <div>
                {data?.[0]?.title}
            </div>
 */}

            <GridList cellHeight={300} cellWidth={250} spacing={7} cols={3} className={classes.gridList}>
                {data.map((tile, i) => (
                    <GridListTile key={i}>
                        <img src={tile.urlToImage} alt={tile.title} title={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            titlePosition="top"

                            className={classes.titleBar}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}


////////////////////

// import React, { useState } from 'react';
// import { Card } from 'react-bootstrap'



// export default function NewsComponent(props) {
//     const [isopen, setOpen] = useState(false)

//     const handleOpen = () => {
//         setOpen(!isopen)
//         console.log(isopen)
//     }


//     console.log(props.data)

//     return (



//         <Card className="bg-dark text-white"  >
//             <Card.Img src="default_holder.js/100px180" alt="Card image" width={731} height={270} />
//             <Card.ImgOverlay>
//                 <Card.Title>{props.data?.title}</Card.Title>
//                 <Card.Text>
//                     {props.data?.description}
//                 </Card.Text>
//                 <Card.Text>Last updated 3 mins ago</Card.Text>

//             </Card.ImgOverlay>
//         </Card>





//     )
// }