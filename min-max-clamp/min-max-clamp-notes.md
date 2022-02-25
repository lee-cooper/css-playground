# Min, Max, and Clamp Notes

From article https://web.dev/min-max-clamp/ by Una Kravets

## Notes

- Min(), Max(), and Clamp() are supported in all browsers
  - Assists with fluid typography, element resizing, and spacing

### Min()

- Provide a specified list of values to `min()` and the browser will determine which is the smallest value

```
width: min(50%, 400px);
```

- In the example above, on larger screens the element will be 400px, until the screen get smaller. If we had a screen size of 500px, then the first argument would evalute to 250px, and thus would be used as the min value instead of 400px.

### Max()

- Similar to min, `max()` will determine which comma separated value is the highest and use that as the max

### Claim()

- first value is the minimum, second value is the ideal, third value is the max
- second value needs to be a dynamic value, like percentage or viewport
