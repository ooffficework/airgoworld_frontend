type Params = {
    fullname: string
    email: string
    phone: string
    gender: string
}
type Errors = {
    fullname?: string
    email?: string
    phone?: string
    gender?: string
}

export const validateUserData = (userData: Params) => {
    let errors: Errors = {};
  
    if (!userData.fullname.trim()) {
      errors.fullname = "Full name is required";
    }
  
    if (!["male", "female", "other"].includes(userData.gender.toLowerCase())) {
      errors.gender = "Please select a valid gender (Male, Female, Other)";
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!userData.email.match(emailRegex)) {
      errors.email = "Invalid email format";
    }
  
    const phoneRegex = /^[0-9]{10,}$/;
    if (!userData.phone.match(phoneRegex)) {
      errors.phone = "Phone number must be at least 10 digits";
    }
    return {
        errors,
        valid: Object.keys(errors).length === 0, 
      };
  };
  