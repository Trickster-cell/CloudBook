#include <iostream>
#include <sstream>
#include <iomanip>
#include <algorithm>
#include <sstream>
#include <string>
#include <climits>
#include <deque>
#include <math.h>
#include <vector>
#include <set>
#include <stack>
#include <queue>
#include <map>
//#include <ext/pb_ds/assoc_container.hpp>
//#include <ext/pb_ds/tree_policy.hpp>
#define int long long
#define vi vector<int>
#define vb vector<bool>
#define get(a)        \
    for (auto &i : a) \
    cin >> i
#define put(a)        \
    for (auto &i : a) \
    cout << i << " "
#define endl "\n"
#define sp << " " <<
#define Yes cout << "YES" << endl
#define Noi cout << "NO" << endl
#define pb push_back
#define all(a) a.begin(), a.end()
#define rall(a) a.rbegin(), a.rend()
const int N = 1e3 + 2;
const int mod = 1e9 + 7;
const int INF = LLONG_MAX;
using namespace std;
// using namespace __gnu_pbds;

// PBDS
// typedef tree<int, null_type, less<int>, rb_tree_tag, tree_order_statistics_node_update> pbds; // find_by_order, order_of_key

signed main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    // freopen("input.txt", "r", stdin);
    // freopen("output.txt", "w", stdout);
    
    vi arr(3);
    int sum = 0;
    for (int i = 0; i < 3; i++)
    {
        cin>>arr[i];
        sum +=arr[i];
    }
    // sort(all(arr));
    bool ok = false;
    for (int i = 0; i < 3; i++)
    {
        int temp = sum - arr[i];
        if (temp>0 && temp%2==0)
        {
            ok = true;
        }
        
    }
    if (ok)
    {
        Yes;
    }
    else
    {
        Noi;
    }
    
    
    

    



    return 0;
}