

export const signIn=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/pg/list');
    }
    return res.redirect('/');
}

export const createSession=function(req,res){
    return res.redirect('/pg/list');
}

export const destroySession=function(req,res){
    req.logout();
    return res.redirect('/');
}