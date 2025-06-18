import "/home/atharvabhosale/react-projects/gym-progressive-overload/MainComponent.css"

const MainComponent = () => {
  return (
    <div className="form-wrapper">
        <form >
            <div className="form-group first-child">
                <label htmlFor="target-muscle">Target Muscle: </label>
                <input type="text" id="target-muscle" className="input-fields" />
            </div>
            <br />
             <div className="form-group">
                <label htmlFor="weight">Last Used Weight: </label>
                <input type="number" id="weight" className="input-fields" />
            </div>
            <br />
             <div className="form-group">
                <label htmlFor="reps">Last Reps: </label>
                <input type="text" id="reps" className="input-fields" />
            </div>

            <button className="submit-btn">Find Overload!</button>
        </form>
    </div>
  )
}

export default MainComponent;