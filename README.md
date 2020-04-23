> collection of hooks that are useful to me

* useCopyToClipboard 
* useDebounce 
* useFormField 
* useHover
* useOnClickOutside
* useStateCallback
* useDrag


### Examples

```js
const [copied, setCopied] = useCopyClipboard()

const copyText = () => {
 setCopied(...)
}


return (<div><button onCLick={copyText}> Copy Text</button></div>)

```


```js
import useDebounce from 'use-debounce'
let [query, setQuery] = React.useState('')
let debouncedQuery = useDebounce(query, 500)
    useEffect(()=> {
    if(debouncedQuery){
      makeQuery(debouncedQuery)
      .then((res)=> {
        setResults(res)
      })
    } else {
      setResults([])
    }
  },[debouncedQuery])


  return(
     <div>
      <input
          value={query}
          placeholder='Search...'
          onChange={e => setQuery(e.target.value)}
        />
      <div>
  )

```


```js

 const ref = React.useRef(null)
 const draggable =  useDrag(ref)

  return (<div ref={ref}>draggable</div>)
}

```


```js

 const [fields, handlChange] = useFormFields({
    username: '',
    password: ''
  })

  return (<div>
      <form onSubmit={handleSubmit}>
      <input type='text'
            value={fields.userName}
            onChange={handleChange}
          />
      <input type='password'
            value={fields.password}
            onChange={handleChange}
          />
      </form>
  </div>)
}

```

```js
 const [hoverRef, isHovered] = useHover()

 return (<div ref={hoverRef}>
      {isHovered ? 'Hovered' : 'Nope'}
    </div>)


```


```js

  const ref = useRef()

  useOnClickOutside(ref, () => console.log('clicked outside'))


  return (<div>  <div ref={ref}> Click outside of me!!!!</div></div>)

```

```js

 let [name, setName] = useStateWithCallback('name', ()=> {
   console.log('callback')
 })
```
