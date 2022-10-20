exports.getAllBootcamps = (req, res)=>{
    res.status(200).json({
        "succes": true,
        "data": `todos los bootcamps`
    })
}

exports.getSingleBootcamp = (req, res)=>{
    res.status(200).json({
        "succes": true,
        "data": `single bootcamp ${ req.params.id }`
    })
}

exports.createBootcamp =  (req, res)=>{
    //código de sstatus
    res.status(201).json({
        "succes": true,
        "data": "creación de bootcamp"
    })
}

exports.updateBootcamp = (req, res)=>{
    res.status(200).json({
        "succes": true,
        "data": `update bootcamp ${ req.params.id }`
    })
}

exports.deleteBootcamp = (req, res)=>{
    res.status(200).json({
        "succes": true,
        "data": `delete bootcamp ${ req.params.id }`
    })
}