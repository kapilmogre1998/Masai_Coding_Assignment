function authorize(permissionRoles) {
    return (req, res, next) => {
        
        // check if at least one role of that user matches with permissionRoles
        let allowed = true
        // console.log("authorize",req.user)
        // req.user.role.map(role => {
            
        //     if(permissionRoles.includes(role)) {
        //        continue;
        //     }
        //     else
        //     allowed = false;
        // })
        let roles = req.user.role,flag = 0;
        for(let i=0;i<permissionRoles.length;i++){
            flag = 0;
            console.log(permissionRoles[i])
            for(let j=0;j<roles.length;j++){
                if(permissionRoles[i] === roles[j]){
                    flag = 1;
                    break;
                }
            }
            if(flag === 0){
                allowed = false;
                break;
            }
        }

        // if not then throw an error
        if (! allowed) return res.status(403).send({message: "You are not allowed to access this page."});

        // if yes then he is allowed
        return next();
    }
}

module.exports = authorize;