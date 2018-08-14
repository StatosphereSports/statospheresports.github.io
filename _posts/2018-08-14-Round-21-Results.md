---

layout: post

title: "Round 21 Results"

date: 2018-08-14

---

<ul class="post">

<div class="blurb">


<p>I've been so flat out the last week that I only just realised I hadn't posted last week's predictions so take these results with a grain of salt, although they were in the predictions tab at least.</p>

<p> Becoming more and more obvious I need to come up with a top 8 side dummy variable to ensure that the model stops thinking Melbourne are a good football side, or at least maybe a method to stop giving them as much credit as they get for blowing teams out.</p>

<table border="1" class="dataframe">   <thead>     <tr style="text-align: right;">       <th>Home</th>       <th>Away</th>       <th>Home Predicted Score</th>       <th>Away Predicted Score</th>       <th>Predicted Margin</th>       <th>Home Score</th>       <th>Away Score</th>       <th>Margin</th>       <th>Error</th>     </tr>   </thead>   <tbody>     <tr>       <td>Essendon</td>       <td>St Kilda</td>       <td>105</td>       <td>74</td>       <td>31</td>       <td>122</td>       <td>79</td>       <td>43</td>       <td>12.19</td>     </tr>     <tr>       <td>Hawthorn</td>       <td>Geelong</td>       <td>85</td>       <td>83</td>       <td>2</td>       <td>71</td>       <td>60</td>       <td>11</td>       <td>9.15</td>     </tr>     <tr>       <td>Gold Coast</td>       <td>Richmond</td>       <td>48</td>       <td>106</td>       <td>-58</td>       <td>51</td>       <td>125</td>       <td>-74</td>       <td>-16.22</td>     </tr>     <tr>       <td>Port Adelaide</td>       <td>West Coast</td>       <td>74</td>       <td>79</td>       <td>-5</td>       <td>58</td>       <td>62</td>       <td>-4</td>       <td>0.67</td>     </tr>     <tr>       <td>Collingwood</td>       <td>Brisbane Lions</td>       <td>106</td>       <td>83</td>       <td>24</td>       <td>104</td>       <td>73</td>       <td>31</td>       <td>7.44</td>     </tr>     <tr>       <td>GW Sydney</td>       <td>Adelaide</td>       <td>90</td>       <td>79</td>       <td>11</td>       <td>106</td>       <td>92</td>       <td>14</td>       <td>2.98</td>     </tr>     <tr>       <td>North Melbourne</td>       <td>Western Bulldogs</td>       <td>97</td>       <td>79</td>       <td>18</td>       <td>85</td>       <td>92</td>       <td>-7</td>       <td>-24.58</td>     </tr>     <tr>       <td>Melbourne</td>       <td>Sydney</td>       <td>99</td>       <td>70</td>       <td>29</td>       <td>78</td>       <td>87</td>       <td>-9</td>       <td>-38.01</td>     </tr>     <tr>       <td>Fremantle</td>       <td>Carlton</td>       <td>89</td>       <td>73</td>       <td>16</td>       <td>101</td>       <td>72</td>       <td>29</td>       <td>13.29</td>     </tr>   </tbody> </table>
 <p>

 	7/9 correct tips for the round takes the season total to 119 while a round MAE of 13.84 decreases the season MAE to 27.92 Season Bits increases to 27.63.

 </p>



<p>

</p>

<h1>

Updated ratings

</h1>

<table border="1" class="dataframe">   <thead>     <tr style="text-align: right;">       <th>Team</th>       <th>Offensive Rating</th>       <th>Defensive Rating</th>       <th>Overall Rating</th>       <th>Last Offensive Rating</th>       <th>Last Defensive Rating</th>       <th>Last Overall Rating</th>       <th>Overall Change</th>       <th>Change</th>     </tr>   </thead>   <tbody>     <tr>       <td>Richmond</td>       <td>10.8668</td>       <td>10.2767</td>       <td>21.1435</td>       <td>9.31397</td>       <td>10.5316</td>       <td>19.8456</td>       <td>1.297870</td>       <td>1</td>     </tr>     <tr>       <td>Melbourne</td>       <td>16.2111</td>       <td>3.09922</td>       <td>19.3103</td>       <td>17.8849</td>       <td>4.46588</td>       <td>22.3508</td>       <td>-3.040432</td>       <td>-1</td>     </tr>     <tr>       <td>GW Sydney</td>       <td>7.57544</td>       <td>7.20441</td>       <td>14.7799</td>       <td>6.29143</td>       <td>8.25014</td>       <td>14.5416</td>       <td>0.238279</td>       <td>1</td>     </tr>     <tr>       <td>West Coast</td>       <td>5.9499</td>       <td>8.46532</td>       <td>14.4152</td>       <td>7.27555</td>       <td>7.19331</td>       <td>14.4689</td>       <td>-0.053638</td>       <td>1</td>     </tr>     <tr>       <td>Geelong</td>       <td>6.03961</td>       <td>7.89737</td>       <td>13.937</td>       <td>7.91132</td>       <td>6.75803</td>       <td>14.6693</td>       <td>-0.732364</td>       <td>-2</td>     </tr>     <tr>       <td>Collingwood</td>       <td>7.3724</td>       <td>5.1746</td>       <td>12.547</td>       <td>7.56159</td>       <td>4.39051</td>       <td>11.9521</td>       <td>0.594904</td>       <td>0</td>     </tr>     <tr>       <td>Hawthorn</td>       <td>4.24665</td>       <td>5.18011</td>       <td>9.42676</td>       <td>5.38599</td>       <td>3.3084</td>       <td>8.69439</td>       <td>0.732364</td>       <td>0</td>     </tr>     <tr>       <td>Port Adelaide</td>       <td>-4.08432</td>       <td>11.7417</td>       <td>7.65735</td>       <td>-2.8123</td>       <td>10.416</td>       <td>7.60371</td>       <td>0.053638</td>       <td>0</td>     </tr>     <tr>       <td>Essendon</td>       <td>5.82886</td>       <td>1.49433</td>       <td>7.32319</td>       <td>4.44643</td>       <td>1.90189</td>       <td>6.34831</td>       <td>0.974881</td>       <td>0</td>     </tr>     <tr>       <td>Sydney</td>       <td>-3.07549</td>       <td>9.15598</td>       <td>6.0805</td>       <td>-4.44214</td>       <td>7.4822</td>       <td>3.04006</td>       <td>3.040432</td>       <td>2</td>     </tr>     <tr>       <td>Adelaide</td>       <td>4.96033</td>       <td>-1.67855</td>       <td>3.28178</td>       <td>3.91459</td>       <td>-0.394536</td>       <td>3.52006</td>       <td>-0.238279</td>       <td>0</td>     </tr>     <tr>       <td>North Melbourne</td>       <td>3.87409</td>       <td>-1.1853</td>       <td>2.68879</td>       <td>4.80794</td>       <td>-0.153012</td>       <td>4.65493</td>       <td>-1.966136</td>       <td>-2</td>     </tr>     <tr>       <td>Brisbane Lions</td>       <td>3.70615</td>       <td>-10.1528</td>       <td>-6.44665</td>       <td>4.49024</td>       <td>-10.342</td>       <td>-5.85175</td>       <td>-0.594904</td>       <td>0</td>     </tr>     <tr>       <td>Western Bulldogs</td>       <td>-10.3189</td>       <td>-4.5165</td>       <td>-14.8354</td>       <td>-11.3512</td>       <td>-5.45035</td>       <td>-16.8016</td>       <td>1.966136</td>       <td>1</td>     </tr>     <tr>       <td>St Kilda</td>       <td>-6.78885</td>       <td>-9.0733</td>       <td>-15.8622</td>       <td>-7.1964</td>       <td>-7.69087</td>       <td>-14.8873</td>       <td>-0.974881</td>       <td>-1</td>     </tr>     <tr>       <td>Fremantle</td>       <td>-10.1453</td>       <td>-8.75796</td>       <td>-18.9032</td>       <td>-11.102</td>       <td>-8.86458</td>       <td>-19.9666</td>       <td>1.063365</td>       <td>0</td>     </tr>     <tr>       <td>Carlton</td>       <td>-18.9023</td>       <td>-17.8356</td>       <td>-36.7379</td>       <td>-18.7957</td>       <td>-16.8789</td>       <td>-35.6745</td>       <td>-1.063365</td>       <td>0</td>     </tr>     <tr>       <td>Gold Coast</td>       <td>-22.8191</td>       <td>-16.9743</td>       <td>-39.7934</td>       <td>-23.074</td>       <td>-15.4215</td>       <td>-38.4955</td>       <td>-1.297870</td>       <td>0</td>     </tr>   </tbody> </table>

</div><!-- /.blurb -->	

</ul>