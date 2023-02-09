export function loginValidate(value){
  const errors = {};

  if(!value.email){
    errors.email = 'Required';
  }else if(!(/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/).test(value.email)){
    errors.email = 'invalid email address';
  }

  if(!value.password){
    errors.password = 'Required';
  }else if(value.password.length < 8 || value.password.length > 20){
    errors.password = 'more than 8 and less than 20';
  }else if(value.password.includes(" ")){
    errors.password = "invalid password"
  }

  return errors
}

export function registerValidate(value){
  const errors = {};

  if(!value.user){
    errors.user = 'Required';
  }else if(value.user.includes(" ")){
    errors.user = 'invalid user';
  }

  if(!value.email){
    errors.email = 'Required';
  }else if(!(/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/).test(value.email)){
    errors.email = 'invalid email address';
  }

  if(!value.password){
    errors.password = 'Required';
  }else if(value.password.length < 8 || value.password.length > 20){
    errors.password = 'more than 8 and less than 20';
  }else if(value.password.includes(" ")){
    errors.password = "invalid password"
  }

  if(!value.cpassword){
    errors.cpassword = 'Required';
  }else if(value.cpassword !== value.password){
    errors.cpassword = 'different from password';
  }

  return errors
}