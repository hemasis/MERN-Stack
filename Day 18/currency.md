# notes for currency converter app

## api link

```javascript
let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`

```

## input box

```javascript

function InputBox({
    label,
    
    className = "",
}) {
   

    return (
        <div 
            className={`bg-white p-4 rounded-xl shadow-md text-base flex flex-col md:flex-row gap-4 md:gap-8 ${className}`}
        >
            {/* Amount Input */}
            <div className="md:w-1/2 w-full">
                <label  className="text-gray-600 font-medium block mb-1">
                    label
                </label>
                <input
                    
                    type="number"
                    placeholder="Amount"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-60"
                />
            </div>

            {/* Currency Select */}
            <div className="md:w-1/2 w-full text-left md:text-right">
                <label className="text-gray-600 font-medium block mb-1">
                    Currency Type
                </label>
                <select
                    className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-400 disabled:opacity-60"
                    
                >
                    
                <option value="usd">
                            usd
                </option>
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;

```


## app js

```javascript
function App() {
    

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('${BackgroundImage}')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           
                        }}
                    >
                      {/* From Box */}
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                
                            />
                        </div>

                        {/* Swap Button */}
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                
                            >
                               ⥂ swap
                            </button>
                        </div>

                        {/* To Box */}
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                
                            />
                        </div>

                        {/* Convert Button */}
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )};

```