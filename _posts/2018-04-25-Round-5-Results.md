---

layout: post

title: "Round 5 Results"

date: 2018-04-25

---

<ul class="post">

<div class="blurb">



 <p>

A good round of footy with a number of upsets with the model only corrently predicting 3 of the 8 non drawn games. 

 </p>

<table border="1" class="dataframe">   <thead>     <tr style="text-align: center;">       <th>Home</th>       <th>Away</th>       <th>Home Predicted Score</th>       <th>Away Predicted Score</th>       <th>Predicted Margin</th>       <th>Home Score</th>       <th>Away Score</th>       <th>Margin</th>       <th>Error</th>     </tr>   </thead>   <tbody>     <tr>       <td>Sydney</td>       <td>Adelaide</td>       <td>93</td>       <td>85</td>       <td>8</td>       <td>75</td>       <td>85</td>       <td>-10</td>       <td>-18.39</td>     </tr>     <tr>       <td>St Kilda</td>       <td>GW Sydney</td>       <td>69</td>       <td>95</td>       <td>-27</td>       <td>73</td>       <td>73</td>       <td>0</td>       <td>26.57</td>     </tr>     <tr>       <td>Carlton</td>       <td>West Coast</td>       <td>77</td>       <td>95</td>       <td>-18</td>       <td>69</td>       <td>79</td>       <td>-10</td>       <td>7.84</td>     </tr>     <tr>       <td>Port Adelaide</td>       <td>Geelong</td>       <td>88</td>       <td>83</td>       <td>4</td>       <td>50</td>       <td>84</td>       <td>-34</td>       <td>-38.15</td>     </tr>     <tr>       <td>Fremantle</td>       <td>Western Bulldogs</td>       <td>79</td>       <td>89</td>       <td>-10</td>       <td>108</td>       <td>54</td>       <td>54</td>       <td>63.77</td>     </tr>     <tr>       <td>North Melbourne</td>       <td>Hawthorn</td>       <td>81</td>       <td>99</td>       <td>-18</td>       <td>98</td>       <td>70</td>       <td>28</td>       <td>45.67</td>     </tr>     <tr>       <td>Brisbane Lions</td>       <td>Gold Coast</td>       <td>95</td>       <td>90</td>       <td>5</td>       <td>71</td>       <td>76</td>       <td>-5</td>       <td>-10.36</td>     </tr>     <tr>       <td>Melbourne</td>       <td>Richmond</td>       <td>68</td>       <td>101</td>       <td>-32</td>       <td>56</td>       <td>102</td>       <td>-46</td>       <td>-13.82</td>     </tr>     <tr>       <td>Collingwood</td>       <td>Essendon</td>       <td>90</td>       <td>88</td>       <td>2</td>       <td>101</td>       <td>46</td>       <td>55</td>       <td>52.7</td>     </tr>   </tbody> </table>

 <p>

 	In terms of MAE it was an improved round compared with last week but just outside the rough goal I set of an MAE under 30 at 30.81. That brings the season MAE down very slightly to 30.86.

 </p>



<p>

</p>

<h1>

Updated ratings

</h1>

<table border="1" class="dataframe">   <thead>     <tr style="text-align: center;">       <th>Team</th>       <th>Offensive Rating</th>       <th>Defensive Rating</th>       <th>Overall Rating</th>       <th>Last Offensive Rating</th>       <th>Last Defensive Rating</th>       <th>Last Overall Rating</th>       <th>Overall Change</th>       <th>Change</th>     </tr>   </thead>   <tbody>     <tr>       <td>Richmond</td>       <td>5.52463</td>       <td>11.6796</td>       <td>17.2042</td>       <td>5.41847</td>       <td>10.6803</td>       <td>16.0988</td>       <td>1.105402</td>       <td>0</td>     </tr>     <tr>       <td>Adelaide</td>       <td>7.42033</td>       <td>7.43379</td>       <td>14.8541</td>       <td>7.40303</td>       <td>5.98022</td>       <td>13.3833</td>       <td>1.470862</td>       <td>2</td>     </tr>     <tr>       <td>Sydney</td>       <td>3.41034</td>       <td>9.08076</td>       <td>12.4911</td>       <td>4.86391</td>       <td>9.09805</td>       <td>13.962</td>       <td>-1.470862</td>       <td>0</td>     </tr>     <tr>       <td>GW Sydney</td>       <td>2.99137</td>       <td>9.23422</td>       <td>12.2256</td>       <td>4.78117</td>       <td>9.57041</td>       <td>14.3516</td>       <td>-2.125995</td>       <td>-2</td>     </tr>     <tr>       <td>Collingwood</td>       <td>3.41688</td>       <td>8.63135</td>       <td>12.0482</td>       <td>2.55815</td>       <td>5.274</td>       <td>7.83215</td>       <td>4.216091</td>       <td>3</td>     </tr>     <tr>       <td>Geelong</td>       <td>4.34001</td>       <td>6.28756</td>       <td>10.6276</td>       <td>4.28964</td>       <td>3.28595</td>       <td>7.57559</td>       <td>3.051973</td>       <td>3</td>     </tr>     <tr>       <td>West Coast</td>       <td>4.60839</td>       <td>4.68591</td>       <td>9.2943</td>       <td>5.87396</td>       <td>4.04771</td>       <td>9.92167</td>       <td>-0.627367</td>       <td>-2</td>     </tr>     <tr>       <td>Port Adelaide</td>       <td>-0.560883</td>       <td>7.26235</td>       <td>6.70147</td>       <td>2.44072</td>       <td>7.31272</td>       <td>9.75344</td>       <td>-3.051973</td>       <td>-2</td>     </tr>     <tr>       <td>Hawthorn</td>       <td>3.62676</td>       <td>1.96643</td>       <td>5.59319</td>       <td>5.92295</td>       <td>3.32411</td>       <td>9.24706</td>       <td>-3.653878</td>       <td>-2</td>     </tr>     <tr>       <td>North Melbourne</td>       <td>-0.92047</td>       <td>4.32878</td>       <td>3.40831</td>       <td>-2.27815</td>       <td>2.03258</td>       <td>-0.245569</td>       <td>3.653878</td>       <td>0</td>     </tr>     <tr>       <td>Melbourne</td>       <td>-1.9361</td>       <td>0.214383</td>       <td>-1.72171</td>       <td>-0.936853</td>       <td>0.320541</td>       <td>-0.616312</td>       <td>-1.105402</td>       <td>0</td>     </tr>     <tr>       <td>Essendon</td>       <td>-2.61734</td>       <td>-4.48026</td>       <td>-7.09759</td>       <td>0.740016</td>       <td>-3.62152</td>       <td>-2.8815</td>       <td>-4.216091</td>       <td>0</td>     </tr>     <tr>       <td>St Kilda</td>       <td>-8.23797</td>       <td>0.543186</td>       <td>-7.69479</td>       <td>-8.57416</td>       <td>-1.24662</td>       <td>-9.82078</td>       <td>2.125995</td>       <td>1</td>     </tr>     <tr>       <td>Fremantle</td>       <td>-8.06781</td>       <td>-1.88168</td>       <td>-9.94949</td>       <td>-10.4087</td>       <td>-4.64261</td>       <td>-15.0513</td>       <td>5.101851</td>       <td>1</td>     </tr>     <tr>       <td>Western Bulldogs</td>       <td>-7.99092</td>       <td>-2.38914</td>       <td>-10.3801</td>       <td>-5.22998</td>       <td>-0.0482215</td>       <td>-5.2782</td>       <td>-5.101851</td>       <td>-2</td>     </tr>     <tr>       <td>Brisbane Lions</td>       <td>-8.57559</td>       <td>-12.6878</td>       <td>-21.2634</td>       <td>-6.6478</td>       <td>-13.7867</td>       <td>-20.4345</td>       <td>-0.828917</td>       <td>0</td>     </tr>     <tr>       <td>Carlton</td>       <td>-13.7491</td>       <td>-7.84874</td>       <td>-21.5979</td>       <td>-13.1109</td>       <td>-9.1143</td>       <td>-22.2252</td>       <td>0.627367</td>       <td>0</td>     </tr>     <tr>       <td>Gold Coast</td>       <td>-16.3084</td>       <td>-8.42234</td>       <td>-24.7307</td>       <td>-15.2095</td>       <td>-10.3501</td>       <td>-25.5597</td>       <td>0.828917</td>       <td>0</td>     </tr>   </tbody> </table>

<p>

Collingwood and Geelong were the big movers this round jumping 3 place and solidying themselves in the top 8 sides in the comp, while Adelaide also jumped 2 spots back up into the top 2 where they have reguarly found themselves over the last 12 months.

</p>
<p>At the other end GWS, West Coast, Port Adelaide, Hawthorn and Western Bulldogs all fell 2 places on the back of underwhelming performances.</p>

<p>While they only moved up one place, Fremantle were the biggest improver in terms of rating, improving by 5.101 points follwing their strong win over the Dogs.</p>

</div><!-- /.blurb -->	

</ul>
