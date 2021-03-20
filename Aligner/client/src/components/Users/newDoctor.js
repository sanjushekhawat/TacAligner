import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { setAlert } from '../../actions/alert'
import { register } from '../../actions/auth'
import PropTypes from 'prop-types'
import axios from 'axios'

const NewDoctor = ({ setAlert, register, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        name: '',
        number: '',
        password: '',
        email: '',
        city: '',
        address: '',
        price: ''
    })

    const { name, number, password, email, city, address, price } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name] : e.target.value })

    const onSubmit = async e => {
        e.preventDefault()
        
           // register({ name, number, email, city, address, role })
            const newUser = {
                name, number, password, email, city, address, price
            }

            try{
                const config = {
                    headers: {
                        'Content-Type':'application/json'
                    }
                }

                const body = JSON.stringify(newUser)

                const res = await axios.post('/api/doctors', body, config)

                console.log(res.data)
            }catch(err){
                console.log(err.response.data)
            }
        
    }

    // //Redirect if authenticated
    // if(isAuthenticated){
    //     return 
    // }


    return (
        <div class="row small-spacing">
                <div>
                    <div class="col-lg-12 col-xs-12">
                        <div class="box-content card white">
                            <h4 class="box-title">Add New Doctor</h4>
                            <a href="/dashboard"><h4 class="box-title">Dashboard</h4></a>
                            {/* <!-- /.box-title --> */}
                            <div class="card-content">
                                <form className="form" onSubmit={e => onSubmit(e)}>
                                    <div class="form-group">
                                        <label for="input-file-now">User's Photo</label>
                                        <input type="file" id="input-file-now" class="dropify" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Name</label>
                                        <input className="form-control" type="text" placeholder="name" name="name" value = {name} onChange = {e => onChange(e)} />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">number</label>
                                        <input className="form-control" type="text" placeholder="number" name="number" value = {number} onChange = {e => onChange(e)} />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">password</label>
                                        <input className="form-control" type="text" placeholder="password" name="password" value = {password} onChange = {e => onChange(e)} />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">email</label>
                                        <input className="form-control" type="text" placeholder="email" name="email" value = {email} onChange = {e => onChange(e)} />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">City</label>
                                        <input className="form-control" type="text" placeholder="City" name="city" value = {city} onChange = {e => onChange(e)} />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Address</label>
                                        <textarea className="form-control" type="text" placeholder="Address" name="address" value = {address} onChange = {e => onChange(e)} />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Price</label>
                                        <textarea className="form-control" type="text" placeholder="Price" name="price" value = {price} onChange = {e => onChange(e)} />
                                    </div>
                                    
                                    
                                    {/* <div class="form-group">
                                        <label for="exampleInputEmail1">Address</label>
                                        <textarea type="text" class="form-control" id="exampleInputName1" placeholder="Enter Address" value = {address} onChange = {e => onChange(e)} required ></textarea>
                                    </div> */}
                                    

                                    <button type="submit" class="btn btn-success btn-sm waves-effect waves-light">Add</button>
                            </form>
                            {/* <!-- /.card-content --> */}
                        </div>
                        {/* <!-- /.box-content --> */}
                    </div>
                    {/* <!-- /.col-lg-6 col-xs-12 --> */}
            </div>
        </div>
        </div>
    )
}

NewDoctor.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state=> ({
    isAuthenticated : state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setAlert, register })(NewDoctor)
