/**Script per recuperare dei file da un file esterno JSON*/

// Definisco lo state per gestire i dati json
const [data, setData] = useState([]);

// Recupero i dati dal json
const getData = () => {
    fetch('./src/assets/json/Questionario.json',
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    )
    .then(function (response) {
        console.log(response)
        return response.json();
    })
    .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
    });
}
useEffect(() => {
    getData()
}, [])