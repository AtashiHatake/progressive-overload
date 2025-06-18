import "/home/atharvabhosale/react-projects/gym-progressive-overload/MainComponent.css"

const MainComponent = () => {
  return (
    <div className="form-wrapper">
        <form >
            <div className="form-group first-child">
                <label htmlFor="target-muscle">Target Muscle: </label>
                <input type="text" id="target-muscle" />
            </div>
            <br />
             <div className="form-group">
                <label htmlFor="weight">Last Used Weight: </label>
                <input type="number" id="weight" />
            </div>
            <br />
             <div className="form-group">
                <label htmlFor="reps">Last Reps: </label>
                <input type="text" id="reps" />
            </div>
        </form>
    </div>
  )
}

export default MainComponent;