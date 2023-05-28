import { useList } from '@pankod/refine-core'
import { Typography, Box, Stack } from '@pankod/refine-mui'
import HomePageLottie1 from 'assets/HomePageLottie1'
import { useNavigate } from '@pankod/refine-react-router-v6'
import { PieChart, PropertyReferrals, TotalRevenue, PropertyCard, TopAgent, CustomButton} from 'components'
import { ExploreRounded, AccountCircleRounded } from '@mui/icons-material'

const Home = () => {
  
  const navigate = useNavigate()
  const {data, isLoading, isError } = useList({
    resource: "properties",
    config: {
      pagination:{
        pageSize: 4,
      }
    }
  })

  const latestProperties = data?.data ?? []

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Something went wrong!</Typography>

  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color={"#11142D"}> Discover </Typography>
{/*     <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart title="Properties for Sale" value={684} series={[ 75, 25 ]} colors={['#475be8', '#e4e8ef']}/>
        <PieChart title="Properties for Rent" value={550} series={[ 75, 25 ]} colors={['#475be8', '#e4e8ef']}/> 
        <PieChart title="Total Customers" value={5684} series={[ 75, 25 ]} colors={['#475be8', '#e4e8ef']}/> 
        <PieChart title="Properties for Cities" value={555} series={[ 75, 25 ]} colors={['#475be8', '#e4e8ef']}/>  
  </Box> 

      <Stack mt="25px" width="100%" gap={4} direction={{ xs: 'column', lg: 'row'}}>
          <TotalRevenue/>
          <PropertyReferrals/>
  </Stack> */}
    
    <Box flex={1} borderRadius="15px" padding="20px" bgcolor="#fcfcfc" display="flex" flexDirection="row" justifyContent="space-between" minWidth="100%" mt="25px">
      <Stack direction="column" gap="10px">

      <Typography fontSize="60px">Discover Blog App!</Typography>
      <Typography fontSize="20px" justifyContent="center" alignContent="center">One stop to share all your thoughts</Typography>

      <Stack mt="30px" display="flex" flexDirection="row" gap="2rem">
        <CustomButton title="Explore Now!" handleClick={() => navigate('/properties')} backgroundColor="#80c2b2" color="#fcfcfc" icon={<ExploreRounded />}/>
        <CustomButton title="My Profile" handleClick={() => navigate('/my-profile')} backgroundColor="#80c2b2" color="#fcfcfc" icon={<AccountCircleRounded />}/>
      </Stack>

      </Stack>
      <HomePageLottie1/>
    </Box>

      <Box flex={1} borderRadius="15px" padding="20px" bgcolor="#fcfcfc" display="flex" flexDirection="column" minWidth="100%" mt="25px">
        <Typography fontSize="18px" fontWeight={600} color="#11142d">Latest Posts</Typography>

        <Box mt={2.5} sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
          {latestProperties.map((property) => (
            <PropertyCard key={property._id} id={property._id} title={property.title} location={property.location} price={property.price} photo={property.photo}/>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Home