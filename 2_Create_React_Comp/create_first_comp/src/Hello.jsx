function Hello() {

    let myName = "Yangma";

    let fullName = () => {
        return "Yangma Lama";
    }

    return <h3>
        Hello this is the future speaking. I am your master {fullName()}
    </h3>
}

export default Hello;