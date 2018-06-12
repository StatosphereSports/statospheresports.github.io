---

layout: post

title: "Round 12 Results"

date: 2018-06-12

---

<ul class="post">

<div class="blurb">



 <p>

 </p>

<table border="1" class="dataframe">   <thead>     <tr style="text-align: center;">       <th>Home</th>       <th>Away</th>       <th>Home Predicted Score</th>       <th>Away Predicted Score</th>       <th>Predicted Margin</th>       <th>Home Score</th>       <th>Away Score</th>       <th>Margin</th>       <th>Error</th>     </tr>   </thead>   <tbody>     <tr>       <td>Port Adelaide</td>       <td>Richmond</td>       <td>73</td>       <td>83</td>       <td>-10</td>       <td>72</td>       <td>58</td>       <td>14</td>       <td>24.13</td>     </tr>     <tr>       <td>Geelong</td>       <td>North Melbourne</td>       <td>79</td>       <td>70</td>       <td>9</td>       <td>96</td>       <td>59</td>       <td>37</td>       <td>27.88</td>     </tr>     <tr>       <td>GW Sydney</td>       <td>Gold Coast</td>       <td>93</td>       <td>62</td>       <td>32</td>       <td>134</td>       <td>26</td>       <td>108</td>       <td>76.19</td>     </tr>     <tr>       <td>St Kilda</td>       <td>Sydney</td>       <td>64</td>       <td>100</td>       <td>-36</td>       <td>55</td>       <td>126</td>       <td>-71</td>       <td>-34.99</td>     </tr>     <tr>       <td>Brisbane Lions</td>       <td>Essendon</td>       <td>89</td>       <td>92</td>       <td>-3</td>       <td>62</td>       <td>84</td>       <td>-22</td>       <td>-19.5</td>     </tr>     <tr>       <td>Fremantle</td>       <td>Adelaide</td>       <td>75</td>       <td>95</td>       <td>-21</td>       <td>71</td>       <td>68</td>       <td>3</td>       <td>23.68</td>     </tr>     <tr>       <td>Melbourne</td>       <td>Collingwood</td>       <td>98</td>       <td>86</td>       <td>12</td>       <td>91</td>       <td>133</td>       <td>-42</td>       <td>-54.08</td>     </tr>   </tbody> </table>

 <p>

 	Overall the model tipped 5/9 and had a MAE of 37.27 increases the season MAE slightly to 29.30.

 </p>



<p>

</p>

<h1>

Updated ratings

</h1>

<table border="1" class="dataframe">   <thead>     <tr style="text-align: center;">       <th>Team</th>       <th>Offensive Rating</th>       <th>Defensive Rating</th>       <th>Overall Rating</th>       <th>Last Offensive Rating</th>       <th>Last Defensive Rating</th>       <th>Last Overall Rating</th>       <th>Overall Change</th>       <th>Change</th>     </tr>   </thead>   <tbody>     <tr>       <td>Sydney</td>       <td>4.0374</td>       <td>13.3938</td>       <td>17.4312</td>       <td>1.92283</td>       <td>12.7089</td>       <td>14.6318</td>       <td>2.799388</td>       <td>3</td>     </tr>     <tr>       <td>Melbourne</td>       <td>14.8048</td>       <td>2.61912</td>       <td>17.4239</td>       <td>15.3778</td>       <td>6.37209</td>       <td>21.7499</td>       <td>-4.326020</td>       <td>-1</td>     </tr>     <tr>       <td>West Coast</td>       <td>10.493</td>       <td>6.06209</td>       <td>16.5551</td>       <td>10.225</td>       <td>7.73726</td>       <td>17.9623</td>       <td>-1.407167</td>       <td>0</td>     </tr>     <tr>       <td>Richmond</td>       <td>7.78912</td>       <td>8.76041</td>       <td>16.5495</td>       <td>9.79161</td>       <td>8.68844</td>       <td>18.4801</td>       <td>-1.930525</td>       <td>-2</td>     </tr>     <tr>       <td>Collingwood</td>       <td>11.6822</td>       <td>4.05673</td>       <td>15.7389</td>       <td>7.92923</td>       <td>3.48368</td>       <td>11.4129</td>       <td>4.326020</td>       <td>1</td>     </tr>     <tr>       <td>Geelong</td>       <td>2.46553</td>       <td>12.3723</td>       <td>14.8379</td>       <td>1.09535</td>       <td>11.512</td>       <td>12.6073</td>       <td>2.230529</td>       <td>-1</td>     </tr>     <tr>       <td>Port Adelaide</td>       <td>-0.719973</td>       <td>10.131</td>       <td>9.41106</td>       <td>-0.648001</td>       <td>8.12853</td>       <td>7.48053</td>       <td>1.930525</td>       <td>1</td>     </tr>     <tr>       <td>North Melbourne</td>       <td>4.5616</td>       <td>3.65112</td>       <td>8.21272</td>       <td>5.42196</td>       <td>5.0213</td>       <td>10.4433</td>       <td>-2.230529</td>       <td>-1</td>     </tr>     <tr>       <td>GW Sydney</td>       <td>0.14346</td>       <td>6.63195</td>       <td>6.77541</td>       <td>-3.09683</td>       <td>3.77696</td>       <td>0.680129</td>       <td>6.095282</td>       <td>1</td>     </tr>     <tr>       <td>Adelaide</td>       <td>2.67562</td>       <td>0.628518</td>       <td>3.30414</td>       <td>4.85413</td>       <td>0.3448</td>       <td>5.19893</td>       <td>-1.894789</td>       <td>-1</td>     </tr>     <tr>       <td>Hawthorn</td>       <td>-1.63091</td>       <td>2.05172</td>       <td>0.420802</td>       <td>-0.777324</td>       <td>0.457986</td>       <td>-0.319338</td>       <td>0.740140</td>       <td>0</td>     </tr>     <tr>       <td>Essendon</td>       <td>-3.55663</td>       <td>-1.83395</td>       <td>-5.39058</td>       <td>-2.9241</td>       <td>-4.02623</td>       <td>-6.95033</td>       <td>1.559756</td>       <td>0</td>     </tr>     <tr>       <td>Western Bulldogs</td>       <td>-12.6806</td>       <td>-0.257894</td>       <td>-12.9385</td>       <td>-11.2337</td>       <td>-0.75006</td>       <td>-11.9838</td>       <td>-0.954746</td>       <td>1</td>     </tr>     <tr>       <td>Fremantle</td>       <td>-8.54483</td>       <td>-5.04632</td>       <td>-13.5911</td>       <td>-8.26111</td>       <td>-7.22483</td>       <td>-15.4859</td>       <td>1.894789</td>       <td>2</td>     </tr>     <tr>       <td>St Kilda</td>       <td>-7.36437</td>       <td>-6.65516</td>       <td>-14.0195</td>       <td>-6.67956</td>       <td>-4.54059</td>       <td>-11.2201</td>       <td>-2.799388</td>       <td>-2</td>     </tr>     <tr>       <td>Brisbane Lions</td>       <td>-4.26736</td>       <td>-12.5788</td>       <td>-16.8462</td>       <td>-2.07508</td>       <td>-13.2113</td>       <td>-15.2864</td>       <td>-1.559756</td>       <td>-1</td>     </tr>     <tr>       <td>Carlton</td>       <td>-13.3392</td>       <td>-11.8799</td>       <td>-25.2191</td>       <td>-13.9567</td>       <td>-12.7839</td>       <td>-26.7406</td>       <td>1.521529</td>       <td>0</td>     </tr>     <tr>       <td>Gold Coast</td>       <td>-20.2191</td>       <td>-18.4241</td>       <td>-38.6432</td>       <td>-17.3641</td>       <td>-15.1838</td>       <td>-32.5479</td>       <td>-6.095282</td>       <td>0</td>     </tr>   </tbody> </table>
<p>
</p>


</div><!-- /.blurb -->	

</ul>
