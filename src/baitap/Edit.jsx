import { yupResolver } from "@hookform/resolvers/yup"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { useNavigate, useParams } from "react-router-dom";
import StudentService from "../../service/Service";
import swal from "sweetalert";
import { NavLink } from "react-router-dom";




const EditTour = () => {
    const { tourId } = useParams();
    const [update, setUpdate] = useState({})
    const back = useNavigate();
    //const này để lấy value ở chỗ địa điểm
    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        try {
            async function getTou() {
                let respo = await StudentService.getTourEdit(tourId);
                setUpdate(respo.data)
            }
            getTou()
        } catch (error) {
            console.log(error);
        }
    }, [tourId])

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(editSchema),
        values: update
    });
    console.log(update);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const editTour = async (setValue) => {
        try {
            await StudentService.editTours(tourId, setValue);
            setUpdate(setValue)
            swal("Chỉnh sửa thành công", "success");
            back("/tour")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container d-flex justify-content-center">
            <div className="row col-md-4 rounded mt-5" id="formAddStudent">
                <h2 className="text-primary text-center mt-4">Edit Tour</h2>
                <form onSubmit={handleSubmit(editTour)}>

                    <div className="form-group mb-3 ">
                        <label className="label-form">Name CiTy</label>
                        <input type="text" name="" id=""
                            className={`${errors?.city?.message ? 'form-control is-invalid' : 'form-control'}`}
                            {...register('city')} />
                        <span className="invalid-feedback" >{errors?.city?.message}</span>
                    </div>

                    <div className="form-group mb-3 ">
                        <label className="label-form">Price</label>
                        <input type="number" name="" id=""
                            className={`${errors?.price?.message ? 'form-control is-invalid' : 'form-control'}`}
                            {...register('price')} defaultValue={update.price}/>
                        <span className="invalid-feedback">{errors?.price?.message}</span>
                    </div>

                    <div className="form-group mb-3 ">
                        <label className="label-form">Description</label>
                        <textarea type="text" name="" id=""
                            className={`${errors?.description?.message ? 'form-control is-invalid' : 'form-control'}`}
                            {...register('description')} defaultValue={update.description}/>
                        <span className="invalid-feedback">{errors?.description?.message}</span>
                    </div>

                    <div className="d-flex justify-content-center mb-3">
                    <NavLink type="submit" className="btn btn-warning me-3" to={'/tour'}>Back</NavLink>
                        <button type="submit" className="btn btn-danger me-3">Update</button>
                        <button type="button" className="btn btn-success"
                            onClick={() => reset()}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditTour